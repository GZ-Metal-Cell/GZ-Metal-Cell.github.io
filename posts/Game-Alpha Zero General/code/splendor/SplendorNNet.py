import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision.models._utils import _make_divisible

class LinearNormActivation(nn.Module):
	def __init__(self, in_size, out_size, activation_layer, depthwise=False, channels=None):
		"""
		第一个参数 56 表示输入特征的维度，即传入该层的数据的特征数。
		第二个参数 56 表示输出特征的维度，即经过这一层后，输出的数据的特征数。
		第三个参数 None 表示没有使用激活函数。
  		"""
		super().__init__()
		self.linear     = nn.Linear(in_size, out_size, bias=False)
		self.norm       = nn.BatchNorm1d(channels if depthwise else out_size)
		self.activation = activation_layer(inplace=True) if activation_layer is not None else nn.Identity()
		self.depthwise = depthwise

	def forward(self, input):
		if self.depthwise:
			result = self.linear(input)
		else:
			result = self.linear(input.transpose(-1, -2)).transpose(-1, -2)
			
		result = self.norm(result)
		result = self.activation(result)
		return result

class SqueezeExcitation1d(nn.Module):
	def __init__(self, input_channels, squeeze_channels, scale_activation, setype='avg'):
		super().__init__()
		if setype == 'avg':
			self.avgpool = torch.nn.AdaptiveAvgPool1d(1)
		else:
			self.avgpool = torch.nn.AdaptiveMaxPool1d(1)
		self.fc1 = nn.Linear(input_channels, squeeze_channels)
		self.activation = nn.ReLU()
		self.fc2 = torch.nn.Linear(squeeze_channels, input_channels)
		self.scale_activation = scale_activation()

	def _scale(self, input):
		scale = self.avgpool(input)
		scale = self.fc1(scale.transpose(-1, -2)).transpose(-1, -2)
		scale = self.activation(scale)
		scale = self.fc2(scale.transpose(-1, -2)).transpose(-1, -2)
		return self.scale_activation(scale)

	def forward(self, input):

		scale = self._scale(input)
		return scale * input

class InvertedResidual1d(nn.Module):
	def __init__(self, in_channels, exp_channels, out_channels, kernel, use_hs, use_se, setype='avg'):
		super().__init__()

		self.use_res_connect = (in_channels == out_channels)

		layers = []
		activation_layer = nn.Hardswish if use_hs else nn.ReLU

		# expand
		if exp_channels != in_channels:
			self.expand = LinearNormActivation(in_channels, exp_channels, activation_layer=activation_layer)
		else:
			self.expand = nn.Identity()

		# depthwise
		self.depthwise = LinearNormActivation(kernel, kernel, activation_layer=activation_layer, depthwise=True, channels=exp_channels)

		if use_se:
			squeeze_channels = _make_divisible(exp_channels // 4, 8)
			self.se = SqueezeExcitation1d(exp_channels, squeeze_channels, scale_activation=nn.Hardsigmoid, setype=setype)
		else:
			self.se = nn.Identity()

		# project
		self.project = LinearNormActivation(exp_channels, out_channels, activation_layer=None)

	def forward(self, input):
		result = self.expand(input)
		result = self.depthwise(result)
		result = self.se(result)
		result = self.project(result)

		if self.use_res_connect:
			result += input

		return result



class SplendorNNet(nn.Module):
	def __init__(self, game, args):
		# game params
		self.nb_vect, self.vect_dim = game.getBoardSize()  # 获取游戏的板状态向量的大小和维度。
		self.action_size = game.getActionSize()  # 可执行动作的数量
		self.num_players = game.num_players  # 参与游戏的人数
		self.args = args  # 额外参数
		self.version = args['nn_version']  # 保存额外的参数和版本信息。

		super(SplendorNNet, self).__init__()  # 调用了父类的初始化方法，以便正确初始化 PyTorch 的模块。
		if self.version == 74: # Small but wide
			# 创建第一层线性归一化激活层，该层将输入维度和输出维度均设置为 56。
			self.first_layer = LinearNormActivation(56, 56, None)
   			# confs 列表用来存储构建块。
			# 添加一个 InvertedResidual1d 模块，它有 56 输入通道，159 扩展通道，56 输出通道和一个卷积核大小为 7 的卷积层。这种结构在深度学习中常用于轻量级模型。
			confs  = []
			confs += [InvertedResidual1d(56, 159, 56, 7, False, "RE")]
			self.trunk = nn.Sequential(*confs)

			n_filters = 56
   			# 输出层构建
			head_PI = [
				# head_PI 定义了策略输出头，这里也使用了 InvertedResidual1d 模块，随后将输出展平，并通过两个全连接层处理，最终输出动作空间的概率分布。
				InvertedResidual1d(56, 159, 56, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(n_filters *7, self.action_size),
				nn.ReLU(),
				nn.Linear(self.action_size, self.action_size),
			]
			self.output_layers_PI = nn.Sequential(*head_PI)

			head_V = [
       			# head_V 定义了价值输出头，结构与策略输出相似，但最终输出的维度为玩家数，返回每位玩家的价值预估。
				InvertedResidual1d(56, 159, 56, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(n_filters *7, self.num_players),
				nn.ReLU(),
				nn.Linear(self.num_players, self.num_players),
			]
			self.output_layers_V = nn.Sequential(*head_V)

		elif self.version == 76: # Like 74 but wider
			self.first_layer = LinearNormActivation(56, 56, None)
			confs  = []
			confs += [InvertedResidual1d(56, 224, 56, 7, False, "RE")]
			self.trunk = nn.Sequential(*confs)

			n_filters = 56
			head_PI = [
				InvertedResidual1d(56, 224, 56, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(n_filters *7, self.action_size),
				nn.ReLU(),
				nn.Linear(self.action_size, self.action_size),
			]
			self.output_layers_PI = nn.Sequential(*head_PI)

			head_V = [
				InvertedResidual1d(56, 224, 56, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(n_filters *7, self.num_players),
				nn.ReLU(),
				nn.Linear(self.num_players, self.num_players),
			]
			self.output_layers_V = nn.Sequential(*head_V)

		elif self.version == 78: # x2
			self.first_layer = LinearNormActivation(self.nb_vect, self.nb_vect, None)
			confs  = []
			confs += [InvertedResidual1d(self.nb_vect, 2*self.nb_vect, self.nb_vect, 7, False, "RE")]
			self.trunk = nn.Sequential(*confs)

			head_PI = [
				InvertedResidual1d(self.nb_vect, 2*self.nb_vect, self.nb_vect, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.action_size),
				nn.ReLU(),
				nn.Linear(self.action_size, self.action_size),
			]
			self.output_layers_PI = nn.Sequential(*head_PI)

			head_V = [
				InvertedResidual1d(self.nb_vect, 2*self.nb_vect, self.nb_vect, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.num_players),
				nn.ReLU(),
				nn.Linear(self.num_players, self.num_players),
			]
			self.output_layers_V = nn.Sequential(*head_V)

		elif self.version == 80: # Very small version using MobileNetV3 building blocks
			self.first_layer = LinearNormActivation(self.nb_vect, self.nb_vect, None)
			confs  = []
			confs += [InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, False, "RE")]
			self.trunk = nn.Sequential(*confs)

			head_PI = [
				InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.action_size),
				nn.ReLU(),
				nn.Linear(self.action_size, self.action_size),
			]
			self.output_layers_PI = nn.Sequential(*head_PI)

			head_V = [
				InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, True, "HS", setype='max'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.num_players),
				nn.ReLU(),
				nn.Linear(self.num_players, self.num_players),
			]
			self.output_layers_V = nn.Sequential(*head_V)

		elif self.version == 82: # x3.5
			self.first_layer = LinearNormActivation(self.nb_vect, self.nb_vect, None)
			confs  = []
			confs += [InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, False, "RE")]
			self.trunk = nn.Sequential(*confs)

			head_PI = [
				InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, True, "HS", setype='avg'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.action_size),
				nn.ReLU(),
				nn.Linear(self.action_size, self.action_size),
			]
			self.output_layers_PI = nn.Sequential(*head_PI)

			head_V = [
				InvertedResidual1d(self.nb_vect, 3*self.nb_vect, self.nb_vect, 7, True, "HS", setype='avg'),
				nn.Flatten(1),
				nn.Linear(self.nb_vect*7, self.num_players),
				nn.ReLU(),
				nn.Linear(self.num_players, self.num_players),
			]
			self.output_layers_V = nn.Sequential(*head_V)


		self.register_buffer('lowvalue', torch.FloatTensor([-1e8]))
		def _init(m):
			"""
			对每一个线性层（nn.Linear），使用 Kaiming 正态分布初始化权重，并将偏置初始化为零。
   			如果传入的是一个顺序容器（nn.Sequential），则递归调用 _init 方法以初始化容器内的所有模块。
   			"""
			if type(m) == nn.Linear:
				nn.init.kaiming_uniform_(m.weight)
				nn.init.zeros_(m.bias)
			elif type(m) == nn.Sequential:
				for module in m:
					_init(module)
		for _, layer in self.__dict__.items():
			"""
			迭代 SplendorNNet 类中的所有属性，
   			对于每一个属性，如果它是一个 PyTorch 模块（即继承自 nn.Module），则应用之前定义的 _init 方法进行初始化。
   			"""
			if isinstance(layer, nn.Module):
				layer.apply(_init)

	def forward(self, input_data, valid_actions):
		"""
		input_data 会被重塑为形状 (-1, self.nb_vect, self.vect_dim)，这一操作通常用于匹配第一层的输入要求 56。
  		"""
		if self.version in [74, 76, 78, 80, 82]:
			x = input_data.view(-1, self.nb_vect, self.vect_dim) # no transpose
			x = self.first_layer(x)
			x = F.dropout(self.trunk(x), p=self.args['dropout'], training=self.training)
			v = self.output_layers_V(x)
			pi = torch.where(valid_actions, self.output_layers_PI(x), self.lowvalue)

		else:
			raise Exception(f'Unsupported NN version {self.version}')

		# 计算输出动作概率的对数值 F.log_softmax(pi, dim=1)，为每个有效动作生成一个概率分布。
		# 将价值输出 v 限制在 [-1, 1] 范围内，以理解每个玩家的相对得分。
		return F.log_softmax(pi, dim=1), torch.tanh(v)



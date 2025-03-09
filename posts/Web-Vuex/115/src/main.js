// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import VueResource from 'vue-resource'
// 引入 store
import store from './store'
// 关闭 Vue 的生产提示
Vue.config.productionTip = false
Vue.config.devtools = true

// 使用插件
Vue.use(VueResource)

// 创建 vm
new Vue({
	el: '#app',
	render: h => h(App),
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})
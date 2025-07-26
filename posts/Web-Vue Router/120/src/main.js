// 引入 Vue
import Vue from 'vue';
// 引入 App
import App from './App.vue';
// 引入 Vue-Router
import VueRouter from 'vue-router';
// 关闭 Vue 的生产提示
Vue.config.productionTip = false;
// 注册 Vue-Router
Vue.use(VueRouter);

import router from './router';

// 创建 vm
new Vue({
	el: '#app',
	render: h => h(App),
	router: router
});
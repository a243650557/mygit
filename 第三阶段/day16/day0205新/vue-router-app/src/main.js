import Vue from 'vue'

//引入路由对象
import router from './router'

import App from './App.vue'

new Vue({
	el: '#app',
	router,//配置路由
	render: h=>h(App)
})



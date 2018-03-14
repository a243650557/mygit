import Vue from 'vue'

import App from './App.vue'

//同一个构造函数创建的所有对象都可以共享同一个原型对象中的属性和方法，所以不会重复创建
Vue.prototype.$center =  new Vue();


const vm = new Vue({
	el: '#app',
	render: h=>h(App)
})

console.log(vm);

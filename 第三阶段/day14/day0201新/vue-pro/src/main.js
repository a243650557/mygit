import Vue from 'vue'

import App from './App.vue'


Vue.prototype.$center =  new Vue();


const vm = new Vue({
	el: '#app',
	render: h=>h(App)
})

console.log(vm);

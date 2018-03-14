import Vue from 'vue'

import App from './App.vue'

const vm = new Vue({
	el: '#app',
	render: h=>h(App)
})


//vue实例的事件监听,多对多

//监听自定义事件
vm.$on('test', (params)=>{
	console.log('test事件触发了1');
	console.log(params);
})

let func = ()=>{
	console.log('test事件触发了2');
};
vm.$on('test', func);

//触发事件
//vm.$emit('test');
//vm.$emit('test');
//vm.$emit('test');

//移除所有监听
//vm.$off('test');

//移除指定事件
//vm.$off('test', func);

//传值
vm.$emit('test', {msg: '测试'});





/*
 非父子组件的传值：
 	利用空实例传值。
 	1.监听事件: $on('自定义事件名字', ()=>{监听到事件的回调});
 	2.触发事件: $emit('自定义事件名字', {传参});
 	
 	3.对同一个对象执行监听和触发
 	4.先监听，后触发
 	5.在组件销毁时，需要移除监听
 * 
 * */
import Vue from 'vue'

import App from './App.vue'

//创建vue实例对象
const vm = new Vue(
	//vue实例的配置项
	{
		//vue实例作用的dom结构, 值为该dom节点的选择器
		el: '#app',
		//提供div为#app元素的渲染方法
		render: function(renderHandle){
			return renderHandle(App);
		}
		
	}
);





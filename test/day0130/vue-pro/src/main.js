import Vue from 'vue'


//创建vue实例对象
const vm = new Vue(
	//vue实例的配置项
	{
		//vue实例作用的dom结构, 值为该dom节点的选择器
		el: '#app',
		//vue实例配置属性
		data: {
			message: 'hello vue'
		}
	}
);





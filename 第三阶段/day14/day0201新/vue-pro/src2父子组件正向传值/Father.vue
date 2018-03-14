<template>
<div class="father">
	<h1>父组件</h1>
	
	<input type="text" v-model="textVal" />
	<button @click="sendAction()">发送</button>
	{{arr}}
	{{obj}}
	<hr />
	
	<!--<son :data="textVal"></son>-->
	<son :data="sendData" 
		title="test" 
		:obj="obj"
		:show="textVal"
		:arr="arr"></son>
	
</div>
</template>

<script>
import Son from './Son.vue'
export default {
	name: 'father',
	data(){
		return {
			textVal: '',
			sendData:'',
			arr: [1,2,3,4],
			obj: {name: 'zhangsan'}
		}
	},
	components: {
		[Son.name]: Son
	},
	methods: {
		sendAction(){
			console.log('发送按钮点击了');
			console.log(this.textVal);
			this.sendData = this.textVal;
		}
	}
}
</script>

<style>
</style>

<!--
	父子组件通信方式：
	1.父组件传值给子组件：
		父组件通过给子组件属性绑定的形式
		1).父组件调用子组件时，给子组件绑定属性
		<son :data="sendData"></son>
		2).子组件需要在props中声明接收外部属性data（数组形式接收:只需要声明属性名字，对象形式接收：需要做属性校验）
		3).子组件通过this访问属性名字就可以使用父组件传入的属性值
			子组件使用外部属性时，只可以使用，不可以更改。
		
-->
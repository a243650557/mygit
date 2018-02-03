<template>
<div class="father">
	<h1>父组件</h1>
	<p>接收到的数据为：{{sonData}}</p>
	<hr />
	
	<!--<son v-on:passData="getData"></son>-->
	<!-- 自定义事件 -->
	<!--<son @click="getData"></son>-->
	<son @passData="getData"></son>
	
</div>
</template>

<script>
import Son from './Son.vue'
export default {
	name: 'father',
	components: {
		[Son.name]: Son
	},
	data(){
		return {
			sonData: ''
		}
	},
	methods:{
		getData({val}){
			console.log('父组件的方法触发了');
			console.log('父组件接收数据：'+val);
			this.sonData = val;
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
	
	2.子组件传值给父组件：
		父组件通过给子组件自定义事件传值
		1).父组件使用子组件时，在子组件标签中自定义事件给子组件。
			<son @passData="getData"></son>
			passData:子组件自定义的事件
			getData：父组件的方法，准备接收子组件数据的方法
		2).子组件传值给父组件时，子组件触发自定义事件。
			this.$emit('passData', {传参的参数});
		3).父组件在方法中，接收到数据
-->
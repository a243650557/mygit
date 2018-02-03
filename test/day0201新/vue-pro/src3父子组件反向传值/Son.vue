<template>
<div class="son">
	<h1>子组件</h1>
	
	<input type="text" v-model="textVal" />
	<button @click="sendAction()">发送</button>
	
</div>
</template>

<script>
export default {
	name: 'son',
	data(){
		return {
			textVal: ''
		}
	},
	methods: {
		sendAction(){
			//将子组件的值传递给父组件
			console.log('子组件数据：'+this.textVal);
			
			//触发组件的自定义事件
			//参数1：事件名字
			//参数2：传参的值
			this.$emit('passData', {
				val: this.textVal,
				val2: '567',
				val3: '8910'
			});
		}
	}
}
</script>

<style>
</style>
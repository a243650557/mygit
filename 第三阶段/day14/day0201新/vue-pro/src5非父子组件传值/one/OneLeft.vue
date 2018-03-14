<template>
<div class="left">

<h1>left组件</h1>

<input type="text" v-model="val"/>
<button @click="sendAction()">发送</button>
	
</div>
</template>

<script>
import center from '../center.js'
export default{
	name: 'left',
	data(){
		return {
			val: ''
		}
	},
	methods: {
		sendAction(){
			center.$emit('pass-left-data', this.val);
		}
	}
}
</script>

<style>
</style>
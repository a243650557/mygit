<template>
<div class="two">

<h1>two组件</h1>
<p>接收到的数据为：{{leftVal}}</p>
	
</div>
</template>

<script>
import center from '../center.js'
export default{
	name: 'two',
	data(){
		return {
			leftVal: ''
		}
	},
	created(){
		center.$on('pass-left-data', (params)=>{
			console.log('two接收到的值为：'+params);
			this.leftVal = params;
		})
	}
}
</script>

<style>
</style>
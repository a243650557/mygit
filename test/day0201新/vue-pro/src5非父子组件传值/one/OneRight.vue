<template>
<div class="right">

<h1>right组件</h1>

<p>接收到的值为：{{leftVal}}</p>

</div>
</template>

<script>
import center from '../center.js'
export default{
	name: 'right',
	data(){
		return {
			leftVal: ''
		}
	},
	methods: {
		getLeftData(params){
			console.log('right接收到的值为：'+params);
			this.leftVal = params;
		}
	},
	created(){
		center.$on('pass-left-data', this.getLeftData);
	},
	beforeDestroy(){
		center.$off('pass-left-data', this.getLeftData);
	},
	destroyed(){
		console.log('right组件销毁了');
	}
}
</script>

<style>
</style>
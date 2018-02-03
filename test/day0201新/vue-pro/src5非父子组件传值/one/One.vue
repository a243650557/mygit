<template>
<div class="one">

<h1>one组件</h1>


left<input type="checkbox" v-model="showLeft" />
<br />
right<input type="checkbox" v-model="showRight" />
<br />
	
<div class="box">
	<left v-if="showLeft"></left>
	<right v-if="showRight"></right>
</div>
	
	
</div>
</template>

<script>
import Left from './OneLeft.vue'
import Right from './OneRight.vue'
export default{
	name: 'one',
	components:{
		[Left.name]: Left,
		[Right.name]: Right
	},
	data(){
		return {
			showLeft: true,
			showRight: true
		}
	}
}
</script>

<style>
.box{
	width: 100%;
	display: flex;
	background: red;
}	
.box div{
	flex: 1;
	border: 1px solid #ddd;
}
</style>
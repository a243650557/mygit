<template>
<div class="item">
	
	<h1>{{title}}</h1>
	<button @click="btnAction">按钮</button>
	
</div>
</template>

<script>
export default {
	name: 'item',
	data(){
		return {
			title: 'item'
		}
	},
	methods:{
		btnAction(){
			this.title = 'item12345';
			console.log(this);
		}
	}
}
</script>

<style>


</style>
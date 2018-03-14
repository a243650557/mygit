<template>
<div class="show-card">
	<h1>查看</h1>
	<p>姓名：{{data.name}}</p>
	<p>性别：{{data.sex}}</p>
	<p>出生年份：{{data.year}}</p>
	<p>兴趣爱好：{{data.like}}</p>
	<p>个性签名：{{data.sign}}</p>
	<button @click="finishAction()">查看完成</button>
</div>
</template>

<script>
export default {
	name: 'show-card',
	props: {
		data: Object
	},
	methods: {
		finishAction(){
			this.$emit('show-finish');
		}
	}
}
</script>

<style>
</style>
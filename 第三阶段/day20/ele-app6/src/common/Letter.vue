<template>
<span class="letter" :style="{background: '#'+color}">
	{{name}}
</span>
</template>

<script>
export default {
	name: 'letter',
	props: {
		color: String,
		name: String
	}
}
</script>

<style scoped>
.letter{
	font-size: 12px;
	color: #fff;
	padding: 0;
	 border-radius: 4px;
}
</style>
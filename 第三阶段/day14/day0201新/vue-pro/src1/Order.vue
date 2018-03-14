<template>
<div class="order page">
	订单管理 
	<add-com></add-com>
</div>
</template>

<script>
import Add from './goods/page/Add.vue'
export default {
	components: {
		'add-com': Add
	}
}
	
</script>

<style>
.order{
	background: lightblue;
}
</style>
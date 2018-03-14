<template>
<div class="search-bar">
	<span>搜索商家、商品名称</span>
</div>
</template>

<script>
export default{
	name: 'search-bar'
}
</script>

<style>
.search-bar{
	background: linear-gradient(90deg,#0af,#0085ff);
	padding: 6px 12px;
	box-sizing: border-box;
}
.search-bar span{
	display: block;
	width: 100%;
	height: 30px;
	background: #fff;
	line-height: 30px;
	color: #999;
	text-align: center;
	font-size: 12px;
	
}
</style>
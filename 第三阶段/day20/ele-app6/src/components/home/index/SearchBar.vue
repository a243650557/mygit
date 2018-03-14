<template>
<div class="search-bar" :class="{position: top}">
	<span>搜索商家、商品名称</span>
</div>
</template>

<script>
export default{
	name: 'search-bar',
	props: {
		top: Boolean
	},
	data(){
		console.log(this.top);
		return {};
	}
}
</script>

<style>
.search-bar{
	background: linear-gradient(90deg,#0af,#0085ff);
	padding: 6px 12px;
	box-sizing: border-box;
	width: 100%;
}
.search-bar.position{
	position: absolute;
	top: 0;
	left: 0;
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
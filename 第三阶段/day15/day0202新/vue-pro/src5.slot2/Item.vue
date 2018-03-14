<template>
<li class="item">
	<img :src="imgPath" />
	<div>
		<h1>{{title}}</h1>
	</div>
</li>
</template>

<script>
export default {
	name: 'item',
	props: {
		imgPath: String,
		title: String
	}
}
</script>

<style>
.item{
	width: 100%;
	height: 50px;
	padding: 5px;
	box-sizing: border-box;
	display: flex;
	border-bottom: 1px solid #ddd;
}	
.item img{
	width: 40px;
	height: 40px;
	display: flex;
}
.item div{
	flex: 1;
}
.item div h1{
	line-height: 40px;
	padding-left: 10px;
}

</style>
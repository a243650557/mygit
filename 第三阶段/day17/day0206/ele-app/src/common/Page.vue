<template>
<div class="page">
	<header class="header" v-if="headerData.isShow">
		<span class="header-btn header-btn-left">返回</span>
		<h1 class="title">{{headerData.title}}</h1>
	</header>
	
	
</div>
</template>

<script>
export default {
	name: 'page',
	props: {
		headerConfig: Object
	},
	data(){
		let headerData = {};
		if(headerData){
			headerData = Object.assign({}, this.headerConfig);
		}
		return {
			headerData
		}
	}
}

</script>

<style scoped>
.page{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 49px;
}
.page .header{
	position: absolute;
	width: 100%;
	height: 44px;
	left: 0;
	top: 0;
	background: linear-gradient(90deg,#0af,#0085ff);
}
.page .header .title{
	width: 100%;
	height: 100%;
	line-height: 44px;
	text-align: center;
	font-size: 16px;
	color: #fff;
}
.page .header .header-btn{
	position: absolute;
	padding: 10px;
	font-size: 12px;
	color: #fff;
	left: 5px;
	top: 50%;
	transform: translateY(-50%);
}
</style>
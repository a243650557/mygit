<template>
<div class="page" :class="{subpage: isSubpage}">
	<!-- 头部 -->
	<header class="header" v-if="headerData.isShow">
		<span class="header-btn header-btn-left">返回</span>
		<h1 class="title">{{headerData.title}}</h1>
	</header>
	
	<div ref="content" class="content" :class="{'has-header': headerConfig}">
		<div class="wrapper">
			
			<!-- 页面内容 -->
			<slot></slot>
			
		</div>
	</div>
	
	
</div>
</template>

<script>
export default {
	name: 'page',
	props: {
		headerConfig: Object,
		isSubpage: Boolean
	},
	data(){
		let headerData = {};
		if(headerData){
			headerData = Object.assign({}, this.headerConfig);
		}
		return {
			headerData
		}
	},
	mounted(){
		//创建滚动视图
		let pageScroll = new IScroll(this.$refs.content, {
			
		});
	}
}

</script>

<style scoped>
.page{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 50px;
}
.page.subpage{
	bottom: 0;
	z-index: 5;
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
.page .content{
	width: 100%;
	top: 0;
	bottom: 0;
	overflow: hidden;
	position: absolute;
}
.page .content.has-header{
	top: 44px;
}
</style>
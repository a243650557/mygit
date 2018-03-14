<template>
<div id="app">
	
	
	<!--路由容器-->
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
	<!--<nav class="tabs">
		<li class="tab"><a href="#/home">首页</a></li>
		<li class="tab"><a href="#/discover">发现</a></li>
		<li class="tab"><a href="#/setting">设置</a></li>
	</nav>-->
	
	
	<!-- 导航页面 -->
	<nav class="tabs">
		<router-link class="tab" to="/home">首页</router-link>
		<router-link class="tab" to="/discover">发现</router-link>
		<router-link class="tab" to="/setting">设置</router-link>
	</nav>
	
	
	<!--<nav class="tabs">
		<li class="tab" @click="tabAction('/home')">首页</li>
		<li class="tab" @click="tabAction('/discover')">发现</li>
		<li class="tab" @click="tabAction('/setting')">设置</li>
	</nav>-->
	
</div>
</template>

<script>
export default {
	name: 'app',
	methods:{
		tabAction(path){
			//通过js切换页面
			//编程式导航
			//操作路由对象
			this.$router.push(path);
		}
	}
}
</script>

<style>
html, body, #app{
	width: 100%;
	height: 100%;
}	

.tabs{
	width: 100%;
	height: 49px;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	background: papayawhip;
	border-top: 1px solid #ddd;
}
.tabs .tab:first-child{
	border: none;
}
.tabs .tab{
	flex: 1;
	border-left: 1px solid #ddd;
	text-align: center;
	line-height: 49px;
}
.tabs .tab.router-link-active{
	background: #fff;
	color: #666;
}
.page{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 50px;
}
.subpage{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 5;
}
</style>
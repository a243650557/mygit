<template>
<nav class="tabs one-border-top">
	<router-link class="tab" v-for="(item, index) in tabsData" :key="index" :to="item.path">
		<i class="iconfont" :class="item.icon"></i>
		<span>{{item.title}}</span>
	</router-link>
	
</nav>
</template>

<script>
export default{
	name: 'tabs',
	data(){
		return {
			tabsData: [
				{title: '首页', icon: 'icon-home', path: '/home'},
				{title: '发现', icon: 'icon-discover', path: '/discover'},
				{title: '订单', icon: 'icon-order', path: '/order'},
				{title: '我的', icon: 'icon-mine', path: '/mine'},
			]
		}
	}
}
</script>

<style scoped>
.tabs{
	width: 100%;
	height: 49px;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	background: #fff;
}
.tabs .tab{
	flex: 1;
	color: #8e8e93;
}
.tabs .tab.router-link-active{
	color: #0089dc;
}
.tab i, .tab span{
	display: block;
	text-align: center;
}
.tab i{
	padding-top: 4px;
	font-size: 20px;
}
.tab span{
	font-size: 12px;
}
</style>
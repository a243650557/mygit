<template>
<div id="app">
	<header class="header">
		<h1 class="title">后台管理系统</h1>
		<nav class="nav">
			<li v-for="(pageItem, index) in pageData" 
				@click="navAction(index)"
				:class="{active: selectIndex==index}">
				{{pageItem.title}}
			</li>
		</nav>
	</header>
	
	<goods v-if="selectIndex==0"></goods>
	<order v-else-if="selectIndex==1"></order>
	<user v-else-if="selectIndex==2"></user>
	
</div>
</template>

<script>
import Goods from './goods/Goods.vue'
import Order from './Order.vue'
import User from './User.vue'
export default {
	data(){
		return {
			pageData: [
				{title: '商品管理'},
				{title: '订单管理'},
				{title: '个人信息'}
			],
			selectIndex: 0
		}
	},
	components: {
		goods: Goods,
		order: Order,
		user: User
	},
	methods: {
		navAction(index){
			this.selectIndex = index;
		}
	}
}
</script>

<style scoped>
.header{
	width: 100%;
	height: 80px;
	display: flex;
	border-bottom: 1px solid #ddd;
}
.header .title{
	padding: 20px;
	line-height: 40px;
	font-size: 30px;
}
.nav{
	flex: 1;
	overflow: hidden;
}
.nav li{
	width: 100px;
	text-align: center;
	line-height: 80px;
	float: left;
	border-left: 1px solid #ddd;
}
.nav li:last-child{
	border-right: 1px solid #ddd;
}
.nav li.active{
	background: papayawhip;
}

.page{
	position: absolute;
	top: 81px;
	bottom: 0px;
	left: 0;
	width: 100%;
	display: flex;
}


</style>
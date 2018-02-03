<template>
<div class="goods page">
	<nav class="side-bar nav">
		<li v-for="(sideItem, index) in sideData"
			@click="sideAction(index)"
			:class="{active: selectIndex==index}">
			{{sideItem.title}}
		</li>
	</nav>
	
	<list v-if="selectIndex==0"></list>
	<add v-else-if="selectIndex==1"></add>
	<modify v-else-if="selectIndex==2"></modify>
	<show v-else-if="selectIndex==3"></show>
	
</div>
</template>

<script>
import list from './page/List.vue'
import add from './page/Add.vue'
import modify from './page/Modify.vue'
import show from './page/Show.vue'


console.log(add);

export default {
	data(){
		return {
			sideData: [
				{title: '商品列表'},
				{title: '新增商品'},
				{title: '修改商品'},
				{title: '查看商品'}
			],
			selectIndex: 0
		}
	},
	components: {
		list: list,
		[add.name]: add,
		modify,
		show
	},
	methods: {
		sideAction(index){
			this.selectIndex = index;
		}
	}
}
</script>

<style>
.goods{
	background: palegreen;
}
.side-bar{
	width: 100px;
	background: #fff;
	border-right: 1px solid #ddd;
	height: 100%;
}
.side-bar li{
	text-align: center;
	line-height: 40px;
	border-bottom: 1px solid #ddd;
}
.side-bar li.active{
	background: darkgray;
	color: #fff;
}
.sub-page{
	flex: 1;
	height: 100%;
	overflow: auto;
}
</style>
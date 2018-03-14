<template>
<div>
<page :canLoadMore="true" @loadMore="handleLoadMore" ref="page" @onScroll="pageScrollAction">
	<!-- 头部  -->
	<home-header></home-header>
	
	<search-bar></search-bar>
	
	<!--<div class="activity">
		<img src="https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d5b531623934png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" />
	</div>-->
	
	<!-- 轮播图 -->
	<home-banner></home-banner>
	
	<!--<div class="activity">
		<img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" />
	</div>-->
	
	<p class="seller-title">推荐商家</p>
	<!-- 列表 -->
	<app-list ref="list" flag="home" @refresh-page="handleRefresh"></app-list>

</page>

<search-bar v-show="showSearchBar" :top="showSearchBar"></search-bar>

<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
<router-view></router-view>
</transition>

</div>
</template>

<script>
import Header from '../../components/home/index/Header.vue'
import SearchBar from '../../components/home/index/SearchBar.vue'
import Banner from '../../components/home/index/Banner.vue'
import List from '../../components/home/index/List.vue'
export default {
	name: 'home',
	components: {
		[Header.name]: Header,
		[SearchBar.name]: SearchBar,
		[Banner.name]: Banner,
		[List.name]: List
	},
	data(){
		return {
			showSearchBar: false
		}
	},
	methods: {
		handleLoadMore(){
			//调用list组件请求下一页数据
			this.$refs.list.requestData(()=>{
				//请求完了，关闭加载更多的动画
				this.$refs.page.loadMoreStatus = 0;
			});
		},
		handleRefresh(){
			//列表组件的活动撑开了滚动容器，需要更新滚动容器
			this.$refs.page.refreshPage();
		},
		//页面滚动事件
		pageScrollAction(y){
			if(y < -38){
				this.showSearchBar = true;
			}else{
				this.showSearchBar = false;
			}
		}
	}
	
}
</script>

<style scoped>
.activity img{
	width: 100%;
}
.seller-title{
	font-size: 14px;
	text-align: center;
	line-height: 30px;
}
.seller-title:before{
	content: '';
	display: inline-block;
	height: 2px;
	width: 20px;
	background: #999;
	transform: translate(-10px, -5px);
	
}
.seller-title:after{
	content: '';
	display: inline-block;
	height: 2px;
	width: 20px;
	background: #999;
	transform: translate(10px, -5px);
}
.slideInRight{
	animation-duration: 200ms;
}
.slideOutRight{
	animation-duration: 200ms;
}
</style>
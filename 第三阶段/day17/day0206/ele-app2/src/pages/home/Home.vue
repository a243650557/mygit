<template>
<page>
	<!-- 头部  -->
	<home-header></home-header>
	
	<search-bar></search-bar>
	
	<div class="activity">
		<img src="https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d5b531623934png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" />
	</div>
	
	<!-- 轮播图 -->
	<home-banner></home-banner>
	
	<div class="activity">
		<img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" />
	</div>
	

	<!-- 列表 -->
	<app-list></app-list>

</page>
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
	}
	
}
</script>

<style scoped>
.activity img{
	width: 100%;
}
</style>
<template>
<div class="swiper-container banner" ref="banner">
    <div class="swiper-wrapper">
    	
        <div class="swiper-slide" v-for="(slideData, i) in bannerData" :key="i">
        	<div class="banner-item" v-for="(item, j) in slideData" :key="j">
        		<img :src="item.imgpath" />
        		<p>{{item.name}}</p>
        	</div>
        </div>
        
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import {getBannerData} from '../../../services/homeService.js'
export default{
	name: 'home-banner',
	data(){
		return {
			bannerData: []
		}
	},
	methods: {
		requestData(){
			//请求轮播数据
			getBannerData()
			.then(result=>{
//				console.log(result);
				//设置轮播数据
				this.bannerData = result;
				//$nextTick代表：bannerData数据变化，导致dom更新，updated完毕后，触发$nextTick中的回调
				//不要写在updated方法中，因为其他一个数字更新，this.bannerSwiper.update()也会被调用

				this.$nextTick(()=>{
					//更新轮播页面数量
					this.bannerSwiper.update();
				})
			})
		}
	},
	mounted(){
		//请求轮播数据
		this.requestData();

		//创建轮播
		//把该对象绑定到this下面
		this.bannerSwiper = new Swiper(this.$refs.banner, {
			pagination: '.swiper-pagination'
		});
		
	}
}
</script>

<style>
.banner{
	padding-bottom: 14px;
}
.banner .swiper-slide{
	overflow: hidden;
}
.banner .banner-item{
	width: 20%;
	float: left;
	margin-top: 5px;
}
.banner .banner-item img{
	width: 40px;
	margin: 0 auto;
}
.banner .banner-item p{
	font-size: 12px;
	text-align: center;
	color: #666;
}
.banner .swiper-pagination-bullets{
	bottom: 0px;
}
.banner .swiper-pagination-bullet{
	width: 4px;
	height: 4px;
}
.banner .swiper-pagination-bullet-active{
	background: #000;
	opacity: 0.6;
}
</style>
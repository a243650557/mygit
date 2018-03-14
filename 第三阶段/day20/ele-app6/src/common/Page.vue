<template>
<div class="page" :class="{subpage: isSubpage}">
	<!-- 头部 -->
	<header class="header" v-if="headerData.isShow">
		<span class="header-btn header-btn-left" @click="backAction()">返回</span>
		<h1 class="title">{{headerData.title}}</h1>
	</header>
	
	<div ref="content" class="content" :class="{'has-header': headerConfig}">
		<div class="wrapper">
			
			<!-- 页面内容 -->
			<slot></slot>
			
			<div v-if="canLoadMore" class="load-more" :class="{down: loadMoreStatus==1}">
				<img :src="loadMoreImg" />
				<span>{{loadMoreText}}</span>
			</div>
			
		</div>
	</div>
	
	
</div>
</template>

<script>
export default {
	name: 'page',
	props: {
		headerConfig: Object,
		isSubpage: Boolean,
		canLoadMore: Boolean
	},
	data(){
		let headerData = {};
		if(headerData){
			headerData = Object.assign({}, this.headerConfig);
		}
		return {
			headerData,
			loadMoreStatus: 0//0 未达到加载更多的状态，1达到了加载更多的状态，2真正加载更多
		}
	},
	computed: {
		loadMoreText(){
			switch (this.loadMoreStatus){
				case 0:
					return '上拉可以加载更多...';
				case 1:
					return '释放立即加载更多...';
				case 2:
					return '正在加载更多...';
			}
		},
		loadMoreImg(){
			return this.loadMoreStatus == 2?'static/img/ajax-loader.gif':'static/img/arrow.png';
		}
	},
	methods: {
		//刷新滚动容器
		refreshPage(){
//			console.log('更新了');
			this.pageScroll.refresh();
			if(this.pageScroll.y <= this.pageScroll.maxScrollY+40){
				this.pageScroll.scrollTo(0, this.pageScroll.maxScrollY+40);
			}
		},
		backAction(){
			this.$router.back();
		}
	},
	mounted(){
		//创建滚动视图
		this.pageScroll = new IScroll(this.$refs.content, {
			probeType: 3
		});
		this.pageScroll.on('scrollStart', ()=>{
			this.refreshPage();
		})
		
		if(this.canLoadMore){
			//添加处理上拉加载更多的代码
			this.pageScroll.on('scroll', ()=>{
				if(this.loadMoreStatus!=2){//不是加载跟多时才做监听操作
					var maxY = this.pageScroll.maxScrollY;
					var y = this.pageScroll.y;
					if(maxY >= y){//超出滚动返回
						this.loadMoreStatus = 1;
					}else{
						this.loadMoreStatus = 0;
					}
				}
				
				this.$emit('onScroll', this.pageScroll.y);
				
			})
			
			this.pageScroll.on('scrollEnd', ()=>{
				if(this.loadMoreStatus!=2){
					var maxY = this.pageScroll.maxScrollY;
					var y = this.pageScroll.y;
					if(maxY >= y){//超出滚动返回
						console.log('超出了');
						//显示加载更多
						this.loadMoreStatus = 2;
						//通知对应使用page组件的页面加载更多
						this.$emit('loadMore');
					}
					else if(maxY < y && y < maxY+40){
						//收回加载跟多的div
						this.pageScroll.scrollTo(0, maxY+40, 200);
					}
				}
			})
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
	bottom: 50px;
	background: #fff;
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
.load-more{
	line-height: 40px;
	height: 40px;
	text-align: center;
	background: red;
}
.load-more img{
	display: inline-block;
	width: 20px;
	transition: 200ms transform;
}
.load-more span{
	font-size: 12px;
	color: #010000;
}
.load-more.down img{
	transform: rotate(180deg);
}
</style>
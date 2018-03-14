<template>
<div>
	<div class="page" id="home">
		<h1>首页</h1>
		<input type="text" />
		<!--<ul class="list">
			<li class="item" v-for="item in listData">
				{{item.title}}
			</li>
		</ul>-->
		
		<!--<ul class="list">
			<router-link class="item" v-for="item in listData" to="/home/detail">
				{{item.title}}
			</router-link>
		</ul>-->
		
		<!--<ul class="list">
			<li class="item" v-for="(item, index) in listData" @click="detailAction(index)">
				{{item.title}}
			</li>
		</ul>-->
		
		
		<ul class="list">
			<router-link class="item" v-for="(item,index) in listData" :key="index" :to="'/home/detail/'+index+'/'+item.title">
				{{item.title}}
			</router-link>
		</ul>
		
	</div>
	
	<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
	<router-view></router-view>
	</transition>
</div>
</template>

<script>
export default {
	name: 'home-page',
	data(){
		return {
			listData: [
				{title: 'item1', description: 'fdasdfjhajsdfha'},
				{title: 'item2', description: 'fdasdfjhajsdfha'},
				{title: 'item3', description: 'fdasdfjhajsdfha'},
				{title: 'item4', description: 'fdasdfjhajsdfha'},
				{title: 'item5', description: 'fdasdfjhajsdfha'}
			]
		}
	},
	methods: {
		detailAction(index){
//			this.$router.push('/home/detail/'+index);
//			this.$router.push('/home/detail/'+index+'/'+this.listData[index].title);
			this.$router.push('/home/detail/'+index+'/'+this.listData[index].title+'?des='+this.listData[index].description);
			
		}
	},
	
	created(){
		console.log('home created ');
	},
	destroyed(){
		console.log('home destroyed ');
		
	}
}
</script>

<style scoped>
#home{
	background: palegreen;
}
.list .item:first-child{
	border-top: 1px solid #999;
}
.list .item{
	display: block;
	line-height: 40px;
	border-bottom: 1px solid #999;
}
.slideInRight, .slideOutRight{
	animation-duration: 300ms;
}
</style>
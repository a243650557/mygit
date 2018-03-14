<template>
<div class="subpage" id="detail">
	<h1>{{title}}详情页</h1>
	<p>{{des}}</p>
	
	<button @click="backAction()">返回</button>
</div>
</template>

<script>
export  default{
	data(){
		return {
			title: '',
			des: ''
		}
	},
	mounted(){
		//取路径中的参数
		console.log(this.$route);
		let id = this.$route.params.id;
		
		this.title = this.$route.params.title;
		
		//取路径的query参数
		this.des = this.$route.query.des;
		
	},
	methods: {
		backAction(){
//			this.$router.push();//进入指定页面
			//返回
			this.$router.back();

//			this.$router.go(-3);
		}
	}
}
</script>

<style>
#detail{
	background: plum;
}
</style>
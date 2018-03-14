<template>
<div class="father">
  <h1>father组件</h1>
  
  <hr />
  
  <div class="nav">
  	<span :class="{active: showFlag=='a'}" @click="changeAction('a')">A组件</span>
  	<span :class="{active: showFlag=='b'}" @click="changeAction('b')">B组件</span>
  </div>
  
  <!-- 在keep-alive内部，如果有组件会销毁， keep-alive会阻止组件销毁，并且将组件缓存起来。下一次需要使用时，不在创建，直接使用缓存的 -->
  <keep-alive>
  	<son-a-com v-if="showFlag=='a'"></son-a-com>
  	<son-b-com v-if="showFlag=='b'"></son-b-com>
  </keep-alive>
  
</div>
</template>

<script>
import SonA from './SonA.vue'
import SonB from './SonB.vue'
export default {
  name: 'father-com',
  components:{
  	[SonA.name]: SonA,
  	[SonB.name]: SonB
  },
  data(){
  	return {
  		showFlag: 'a'
  	}
  },
  methods: {
  	changeAction(flag){
  		this.showFlag = flag;
  	}
  },
  
  errorCaptured(error){
  	console.log('father组件错了');
  	console.log(error);
  	//处理了错误
  	return false;//错误事件是否向上一级传递
  }
}
</script>


<style>
.nav{
	width: 100%;
	height: 40px;
	border: 2px solid saddlebrown;
	box-sizing: border-box;
	display: flex;
	border-radius: 4px;
}
.nav span{
	flex: 1;
	text-align: center;
	line-height: 36px;
	color: saddlebrown;
	background: #fff;
	font-weight: bold;
}
.nav span.active{
	background: saddlebrown;
	color: #fff;
}
.nav span:first-of-type{
	border-right: 2px solid saddlebrown;
}
</style>
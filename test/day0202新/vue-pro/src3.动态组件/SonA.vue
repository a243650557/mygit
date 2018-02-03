<template>
<div class="son-a">
  <h1>son-a组件</h1>
  
  <input type="text" v-model="val"/>
</div>
</template>

<script>
export default {
  name: 'son-a-com',
  data(){
  	return {
  		val: ''
  	}
  },
  beforeCreate(){
  	console.log('beforeCreate...');
  },
  //compoents props>>>data>>>computed>>>watch   methods
  created(){
  	console.log('created....');
  },
  beforeMount(){
  	console.log('beforeMount...');
  },
  mounted(){
  	console.log('mounted...');
  },
  //数据发生变化后执行
  beforeUpdate(){
  	console.log('beforeUpdate...');
  },
  updated(){
  	console.log('updated...');
  	
  	this.val.map((item)=>{});
  	
  },
  //组件销毁
  beforeDestroy(){
  	console.log('beforeDestroy...');
  },
  destroyed(){
  	console.log('destroyed...');
  },
  
  //组件激活状态，从缓存中取出使用
  activated(){
  	console.log('activated...');
  },
  
  //组件取消活跃状态，被keep-alive缓存
  deactivated(){
  	console.log('deactivated...');
  },
  
  errorCaptured(){
  	console.log('son - a组件错了');
  }
  
  
  
  
}
</script>

<style>
</style>
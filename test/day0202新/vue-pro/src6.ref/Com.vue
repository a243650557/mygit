<template>
<div class="com" ref="wrapper">
	<h1>com</h1>
	<!--ref 给组件的dom结构设置唯一标识符 -->
	<!-- ref给标签设置，使用this.$refs访问时，就是标签的dom对象 -->
	<!-- ref给组件设置，使用this.$refs访问时，是组件对象，可以得到组件内部的所有内容 -->
	<input ref="in" type="text" />
	<input ref="in2" type="text" />
	<input ref="in3" type="text" />
	
	<button @click="btnAction">父组件调用子组件</button>
	<hr />
	
	<item ref="it"></item>
	
</div>
</template>

<script>
import item from './Item.vue'
export default {
  name: 'com',
  components: {
  	[item.name]: item
  },
  beforeMount(){
  	console.log('beforeMount');
  	var input = this.$refs.in;
  	console.log(input);
  },
  mounted(){
  	console.log('mounted');
  	var input = this.$refs.in;
  	console.log(input);
  	
  	console.log(this.$refs);//{in: input, in2: input, in3: input, it: VueComponent} 输出全部对象
  },
  methods: {
  	
  	btnAction(){
  		//访问子组件属性
  		var title = this.$refs.it.title;
  		console.log(title);
  		//调用子组件的方法
  		this.$refs.it.btnAction();	
  	}
  }
  
}
</script>

<style>
</style>
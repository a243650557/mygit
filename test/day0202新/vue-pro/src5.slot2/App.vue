<template>
<div id="app">
	<h1>app</h1>
	
	<!-- list组件跟item组件不是父子组件，只是dom结构嵌套 -->
	<list>
		<item v-for="item in listArr" :imgPath="item.img" :title="item.title"></item>
	</list>

</div>
</template>

<script>
import List from './List.vue'
import Item from './Item.vue'
export default {
  name: 'App',
  components: {
  	[List.name]: List,
  	[Item.name]: Item
  },
  data(){
  	return {
  		listArr: [
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'},
  			{img: 'https://cn.vuejs.org/images/logo.png', title: 'vue学习'}
  		]
  	}
  }
  
  
}
</script>
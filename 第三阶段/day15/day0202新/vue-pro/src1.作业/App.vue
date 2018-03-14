<template>
<div id="app">
	
  <add v-show="cardIndex==0"></add>
  <modify v-show="cardIndex==1" @finish-modify="resetShow"></modify>
  <show v-show="cardIndex==2" @finish-show="resetShow"></show>
  
  <hr />
  <list @show-change="handleChange"></list>
</div>
</template>

<script>
import Add from './components/Add.vue'
import Modify from './components/Modify.vue'
import Show from './components/Show.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  components: {
  	[Add.name]: Add,
  	[Modify.name]: Modify,
  	[Show.name]: Show,
  	[List.name]: List
  },
  data(){
  	return {
  		cardIndex: 0//0:add,1:modify,2:show
  	}
  },
  methods: {
  	handleChange(index){
  		this.cardIndex = index;
  	},
  	resetShow(){
  		this.cardIndex = 0;
  	}
  }
}
</script>
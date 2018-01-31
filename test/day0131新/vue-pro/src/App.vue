<template>
<div id="app1"> <!--//名字不一定要跟首页相同-->
	<h1>根组件</h1>
	<p>{{message}}</p>
	<input type="text" v-model="message" />
	<input type="number" v-model.number="a" />
	<input type="number" v-model.number="b" />
	{{count}}
	<button @click="btnAction()">按钮</button>
	
	<hr />
	
	<button @click="flag='one'" :class="{active: flag=='one'}">one</button>
	<button @click="flag='two'" :class="{active: flag=='two'}">two</button>
	
	<one-com v-if="flag=='one'"></one-com>
	<two-com v-if="flag=='two'"></two-com>
	
</div>
</template>

<script>
import One from './components/One.vue'
import Two from './components/Two.vue'

export default {
	data(){
		return {
			message: 'hello component',
			a: 1,
			b: 2,
			flag: 'one'
		}
	},
	computed: {
		count(){
			return this.a+this.b;
		}
	},
	watch: {
		message(newVal, oldVal){
			console.log('message变化了');
			console.log('newVal:'+newVal);
			console.log('oldVal:'+oldVal);
		}
	},
	methods: {
		btnAction(){
			console.log(this.message);
		}
		
	},
	components:{
		'one-com': One,
		'two-com': Two
	}
	

}
</script>

<style>
.add-card{
	width: 300px;
	height: 300px;
	background: pink;
}	
button.active{
	background: red;
}
</style>
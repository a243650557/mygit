<template>
<div id="app">
	<h1>app</h1>
	
	<input ref="in" id="app-in" type="text" />

<hr />


	<com></com>
	
</div>
</template>

<script>
import Com from './Com.vue'
export default {
  name: 'App',
  components: {
  	[Com.name]: Com
  },
//beforeMount(){
//	console.log('beforeMount');
//	var input = document.querySelector('input');
//	console.log(input);
//},
//mounted(){
//	console.log('mounted');
//	var input = document.querySelector('input');
//	console.log(input);
//}
//
  
}
</script>
<template>
<div id="app">
	
	<father-com></father-com>

</div>
</template>

<script>
import Father from './Father.vue'
export default {
  name: 'App',
  components:{
  	[Father.name]: Father
  },
  
  errorCaptured(){
  	console.log('app组件错了');
  }
}
</script>
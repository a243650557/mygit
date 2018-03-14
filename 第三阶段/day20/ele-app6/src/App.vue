<template>
  <div id="app">
    
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    
    <tabs></tabs>
    
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
  	[Tabs.name]: Tabs
  },
  methods: {
  	...mapActions({
  		'getLocation': 'address/getLocation'
  	})
  },
  created(){
//	this.getLocation();
		this.$store.dispatch('address/getLocation')
  }
}
</script>

<style>

</style>

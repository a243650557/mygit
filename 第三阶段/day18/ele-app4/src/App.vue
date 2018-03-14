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
export default {
  name: 'App',
  components: {
  	[Tabs.name]: Tabs
  }
}
</script>

<style>

</style>

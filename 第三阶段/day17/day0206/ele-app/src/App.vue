<template>
  <div id="app">
    
    <router-view></router-view>
    
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

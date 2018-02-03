<template>
<div id="app">
	<h1>app</h1>
	
	<list>
		
		<p>fdasdlfajdfkls</p>
		<p>fdasdlfajdfkls</p>
		<p>fdasdlfajdfkls</p>
		
		<ul slot="ul-list">
			<li>item1</li>
			<li>item2</li>
			<li>item3</li>
		</ul>
		
		<h1>fdasdj;laksd</h1>
		
		<ol slot="ol-list">
			<li>item1</li>
			<li>item2</li>
			<li>item3</li>
		</ol>
		
		<h6>fdasdfasdu</h6>
		
	</list>

</div>
</template>

<script>
import List from './List.vue'
export default {
  name: 'App',
  components: {
  	[List.name]: List
  }
  
  
}
</script>
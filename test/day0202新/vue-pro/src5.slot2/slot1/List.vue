<template>
<div class="list">
	
	<slot name="ul-list"></slot>
	<slot name="ul-list"></slot>
	<slot name="ul-list"></slot>
	
	<p>分割线1</p>
	<hr />
	
	<p>分割线2</p>
	<hr />
	
	<!-- slot接收组件标签内部的dom，装载到组件内部 -->
	<slot></slot>
	<p>------------------------</p>
	<slot></slot>
	
	<p>分割线3</p>
	<hr />
	
	<p>分割线4</p>
	<hr />
	
	<slot name="ol-list"></slot>
	
</div>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style>
</style>
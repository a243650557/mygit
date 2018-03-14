<template>
<div id="app">
	<!-- 使用currency过滤器，过滤数据 -->
	<p>价格：{{99.99 | currency}}</p>
	<p>价格：{{56.89 | currency}}</p>
	<p>价格：{{32.88 | currency}}</p>
	
	<p v-drag>{{arr | arrFilter('odd')}}</p>
	
	<p>{{arr | arrFilter('even')}}</p>
	
	
	<p v-test.left.right="1+2+3">fasdfjalskjdkf</p>

	

	<box-com></box-com>
	
	
	
	
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		arr: [1,2,4,5,7,8,3,1,4,33,34,56,77,323]
  	}
  }
}
</script>
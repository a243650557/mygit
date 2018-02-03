<template>
<div id="app">

	<one></one>
	<hr />
	<two></two>
	
</div>
</template>

<script>
import One from './one/One.vue'
import Two from './two/Two.vue'
export default {
	components: {
		[One.name]: One,
		[Two.name]: Two
	}

}
</script>

<style scoped>


</style>
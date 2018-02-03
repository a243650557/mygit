<template>
<div id="app">
	<father></father>
</div>
</template>

<script>
import Father from './Father.vue'
export default {
	components: {
		[Father.name]: Father
	}
}
</script>

<style scoped>


</style>
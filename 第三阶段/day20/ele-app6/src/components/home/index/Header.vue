<template>
<header class="home-header">
	<h3 @click="goAddressPage()">福中三路深圳市民中心</h3>
</header>
</template>

<script>
export default{
	name: 'home-header',
	methods: {
		goAddressPage(){
			this.$router.push('/home/address');
		}
	}
}
</script>

<style scoped>
.home-header{
	box-sizing: border-box;
	width: 100%;
	padding: 6px 12px;
	padding-bottom: 0;
	background: linear-gradient(90deg,#0af,#0085ff);
}
.home-header h3{
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #fff;
	font-weight: normal;
}
</style>
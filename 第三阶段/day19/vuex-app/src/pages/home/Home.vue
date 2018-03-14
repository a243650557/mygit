<template>
<page>
	<h1>首页</h1>
	<!-- 全局状态 -->
	<h1>{{$store.state.message}}</h1>
	<h1>{{$store.getters.msgLen}}</h1>
	<!-- 全局模块user的状态 -->
	<h1>{{$store.state.user.username}}</h1>
	<h1>{{$store.getters.nameLen}}</h1>
	
	
	<button v-for="item in list" @click="selectAction(item)">{{item}}</button>
	
	<button @click="btnAction()">按钮</button>

</page>
</template>

<script>
export default {
	name: 'home',
	data(){
		return {
			list: ['vue', 'react', 'angular']
		}
	},
	methods: {
		btnAction(){
//			console.log(this.$store);
//			this.$store.state.message = 'hello world';
		

			//触发mutations,
			//参数1：mutation名字，
			//参数2：传参值
//			this.$store.commit('modifyMessage', {
//				value: 'hello world'
//			});

			//触发actions
//			this.$store.dispatch('getMessageAction', {
//				test: '123'
//			});


			//触发user模块的mutations和actions
//			this.$store.commit('modifyUsername', {
//				value: 'test user mutations'
//			});
			
			this.$store.dispatch('usernameAction', {
				value: 'test user actions'
			});
			
		},
		selectAction(item){
			this.$store.dispatch('userSelectMessageAction', {
				value: item
			});
		}
	}
	
}
</script>

<style scoped>
.activity img{
	width: 100%;
}
</style>
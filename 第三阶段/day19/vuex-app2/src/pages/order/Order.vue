<template>
<page :headerConfig="headerData">
	<h1>{{user}}</h1>
	<h1>{{nameLen}}</h1>
	
	
	<button @click="modifyUser()">test mutation</button>
	<button @click="usernameAction()">test actions</button>
</page>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	name: 'order',
	data(){
		return {
			headerData: {
				isShow: true,
				title: '订单'
			}
		}
	},
	computed: {
		...mapState({
			user: (state)=>state.user.username
		}),
		...mapGetters({
			nameLen: 'user/nameLen'
		})
	},
	methods: {
		...mapMutations({
			modifyUser: 'user/modifyUsername'
		}),
		...mapActions({
			usernameAction: 'user/usernameAction'
		}),
	}
}
</script>

<style>
</style>
<template>
<page>
	<h1>发现</h1>
	<h1>{{msg}}</h1>
	<h1>{{len}}</h1>
	
	<button @click="testAction()">按钮</button>
	
	
	<input type="number" v-model.number="aNum"/>
	<input type="number" v-model.number="bNum"/>
	
	<p>总和： {{count}}</p>
	
</page>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import Vuex from 'vuex'
console.log(Vuex);
export default {
	name: 'discover',
	data(){
		return {
			aNum: 10,
			bNum: 8
		}
	},
	
//	computed: mapState(['message', 'title']),//将全局状态，转为自身的属性，之后，全局属性修改了，也会跟着修改
	
	
//	computed: mapState({
//		msg: (state)=>state.message
//	}),
	
	computed: {
		//把全局属性转为 组件的计算属性
		...mapState({
			msg: (state)=>state.message
		}),
		//把全局计算属性，转为组件的计算属性
//		...mapGetters(['msgLen']),
		...mapGetters({
			len: 'msgLen'//getter只可以根据state修改，其他不能修改
		}),
		
		count(){
			return this.aNum+this.bNum;
		}
	},
	
	methods: {
		...mapMutations({
			modifyMsg: 'modifyMessage'
		}),
		
		...mapActions({
			selectMsg: 'userSelectMessageAction'
		}),
		
		testAction(){
//			console.log(this.msg);
//			console.log(this.title);
			
//			this.modifyMsg({
//				value: '123'
//			});

			this.selectMsg({
				value: 'qaz'
			})

		}
	}
}
</script>

<style>
</style>
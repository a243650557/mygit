<template>
<ul class="list">
	<li v-for="(info, index) in data">
		<h3>{{info.name}}</h3>
		<p>{{info.sign}}</p>
		<p>
			<button @click="showAction(index)">查看</button>
			<button @click="modifyAction(index)">修改</button>
			<button @click="deleteAction(index)">删除</button>
		</p>
		
	</li>
</ul>
</template>

<script>
export default {
	name: 'list-card',
	props: {
		data: Array
	},
	methods: {
		showAction(index){
			console.log('查看:'+index);
			//告诉app组件需要查看的下标
			this.$emit('show-data', index);
		},
		modifyAction(index){
			console.log('修改:'+index);
			this.$emit('modify-data', index);
		},
		deleteAction(index){
			console.log('删除:'+index);
			//告诉app组件，需要删除下标为index的数据
			this.$emit('delete-data', index);
		}
	}
}
</script>

<style>
</style>
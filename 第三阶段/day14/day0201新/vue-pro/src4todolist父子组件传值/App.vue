<template>
<div id="app">
	<!-- 新增 -->
	<add-card v-if="showIndex==0" @add-data="handleAdd"></add-card>
	<!-- 修改 -->
	<modify-card v-else-if="showIndex==1" :data="modifyData"
		@modify-finish="handleModifyFinish"></modify-card>
	<!-- 查看 -->
	<show-card v-else-if="showIndex==2" :data="showData" @show-finish="handleShowFinish"></show-card>
	
	<hr />
	
	<!-- 列表 -->
	<list-card :data="dataSource" 
		@delete-data="handleDelete"
		@show-data="handleShow"
		@modify-data="handleModify">
	</list-card>
	
</div>
</template>

<script>
import Add from './components/Add.vue'
import Modify from './components/Modify.vue'
import Show from './components/Show.vue'
import List from './components/List.vue'
export default {
	components: {
		[Add.name]: Add,
		[Modify.name]: Modify,
		[Show.name]: Show,
		[List.name]: List
	},
	data(){
		return {
			showIndex: 0,//0：新增，1：修改，2：查看
			//准备数据源
			dataSource: [],
			//查看卡片显示的数据
			showData: {},
			//修改卡片的数据
			modifyData: {},
			//修改的下标
			modifyIndex: -1
			
		}
	},
	methods: {
		//新增数据的事件
		handleAdd(dataInfo){
			this.dataSource.push(dataInfo);
		},
		//删除数据的事件
		handleDelete(index){
			this.dataSource.splice(index, 1);
		},
		//查看事件
		handleShow(index){
			//显示查看卡片
			this.showIndex = 2;
			//告诉查看卡片查看的数据是什么
			this.showData = this.dataSource[index];
		},
		//查看完成事件
		handleShowFinish(){
			//隐藏查看卡片
			this.showIndex = 0;
			//查看卡片查看的数据重置
			this.showData = {};
		},
		//显示修改的事件
		handleModify(index){
			//显示修改卡片
			this.showIndex = 1;
			//告诉修改卡片需要修改的数据是什么
			this.modifyData = this.dataSource[index];
			this.modifyIndex = index;
		},
		//修改完成事件
		handleModifyFinish(dataInfo){
			if(dataInfo){
				//修改完成
				//app修改数据
				this.dataSource.splice(this.modifyIndex, 1, dataInfo);
			}
			//app显示新增卡片
			this.showIndex = 0;
			//重置修改条件的值
			this.modifyData = {};
			this.modifyIndex = -1;
		}
	}
}
</script>

<style scoped>


</style>
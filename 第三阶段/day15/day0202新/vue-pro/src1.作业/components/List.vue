<template>
<div class="list">
  <h1>列表</h1>
  <ul>
  	<li v-for="(item, index) in dataSource">
  		<h3>{{item.name}}</h3>
  		<p>
  			<button @click="showAction(index)">查看</button>
  			<button @click="modifyAction(index)">修改</button>
  			<button @click="deleteAction(index)">删除</button>
  		</p>
  	</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'list',
  data(){
  	return {
  		dataSource: [],
  		modifyIndex: -1
  	}
  },
  methods: {
  	//删除
  	deleteAction(index){
  		this.dataSource.splice(index, 1);
  	},
  	//查看
  	showAction(index){
  		//让app组件展示查看
  		this.$emit('show-change', 2);
  		//告诉查看组件需要展示的数据
  		this.$center.$emit('show-data', Object.assign({}, this.dataSource[index]));
  	},
  	//修改
  	modifyAction(index){
  		//让app组件展示修改
  		this.$emit('show-change', 1);
  		//告诉修改组件需要展示的数据
  		this.$center.$emit('modify-data', Object.assign({}, this.dataSource[index]));
  		//记录修改的位置
  		this.modifyIndex = index;
  	}
  },
  created(){
  	//监听新增事件
  	this.$center.$on('add-data', (newData)=>{
  		this.dataSource.push(newData);
  	})
  	//添加修改完成事件
  	this.$center.$on('modify-finish', (data)=>{
  		//将修改完成的数据放置在对应的位置上
  		this.dataSource.splice(this.modifyIndex, 1, data);
  		//重新修改下标
  		this.modifyIndex = -1;
  	});
  }
}
</script>
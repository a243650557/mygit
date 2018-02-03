<template>
<div class="add">
  <h1>新增</h1>
  <div>
  	<label>姓名：</label>
  	<input type="text" v-model="name" />
  </div>
  <div>
  	<label>性别：</label>
  	<label v-for="sexItem in sexArr"><input type="radio" :value="sexItem" v-model="sex"/>{{sexItem}}</label>
  </div>
  <div>
  	<textarea v-model="sign"></textarea>
  </div>
  <div>
  	<button @click="addAction()">新增</button>
  	<button @click="cancelAction()">取消</button>
  </div>
  
  
</div>
</template>

<script>
export default {
  name: 'add',
  data(){
  	return {
  		//输入框使用初始值
  		sexArr: ['男', '女'],
  		
  		name: '',
  		sex: '',
  		sign:''
  	}
  },
  methods: {
  	//新增按钮事件
  	addAction(){
  		//将新增数据传递给list组件
		this.$center.$emit('add-data', {
			name: this.name,
			sex: this.sex,
			sign: this.sign
		});
		//清空输入框
		this.cancelAction();
  	},
  	//取消按钮事件
  	cancelAction(){
  		this.name = '';
  		this.sex = '';
  		this.sign = '';
  	}
  }
}
</script>
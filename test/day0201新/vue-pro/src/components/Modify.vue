<template>
<div class="modify">
  <h1>修改</h1>
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
  	<button @click="modifyAction()">修改</button>
  	<button @click="cancelAction()">取消</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'modify',
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
  	modifyAction(){
  		//把数据告诉list组件，
  		this.$center.$emit('modify-finish', {
  			name: this.name,
  			sex: this.sex,
  			sign: this.sign
  		})
  		//展示回新增
  		this.$emit('finish-modify');
  	},
  	cancelAction(){
  		//展示回新增
  		this.$emit('finish-modify');
  	}
  },
  created(){
  	this.$center.$on('modify-data',(data)=>{
  		this.name = data.name;
  		this.sex = data.sex;
  		this.sign = data.sign;
  	});
  }
}
</script>
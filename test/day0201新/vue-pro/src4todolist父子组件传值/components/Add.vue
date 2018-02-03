<template>
<div class="add-card">
	<h1>新增</h1>
	<p>
		<label>姓名：</label>
		<input type="text" v-model="name"/>
	</p>
	<p>
		<label>性别：</label>
		<label v-for="item in sexArr">
			<input type="radio" :value="item" v-model="sex"/>
			{{item}}
		</label>
	</p>
	<p>
		<label>出生年份：</label>
		<select v-model="year">
			<option v-for="item in yearArr" :value="item">{{item}}</option>
		</select>
	</p>
	<p>
		<label>兴趣爱好：</label>
		<label v-for="item in likeArr">
			<input type="checkbox" :value="item" v-model="like"/>
			{{item}}
		</label>
	</p>
	<p>
		<label>个性签名：</label>
		<textarea v-model="sign"></textarea>
	</p>
	<button @click="addAction()">新增</button>
	<button @click="cancelAction()">取消</button>
</div>
</template>

<script>
export default {
	name: 'add-card',
	data(){
		return {
			sexArr: ['男', '女'],
			yearArr: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997],
			likeArr: ['吃', '喝', '玩', '乐'],
			
			//用户选择的值
			name: '',
			sex: '',
			year: '',
			like: [],
			sign: ''
		}
	},
	methods: {
		addAction(){
			//将用户输入的新增数据传入父组件
			this.$emit('add-data', {
				name: this.name,
				sex: this.sex,
				year: this.year,
				like: this.like,
				sign: this.sign
			});
			//清空输入框
			this.cancelAction();
		},
		cancelAction(){
			//清空文本输入框
			this.name = '';
			this.sex = '';
			this.year = '';
			this.like = [];
			this.sign = '';
		}
	}
}
</script>

<style>
</style>
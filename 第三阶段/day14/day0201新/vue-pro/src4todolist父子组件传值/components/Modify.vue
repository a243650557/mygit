<template>
<div class="modify-card">
	<h1>修改</h1>
	<p>
		<label>姓名：</label>
		<input type="text" v-model="info.name"/>
	</p>
	<p>
		<label>性别：</label>
		<label v-for="item in sexArr">
			<input type="radio" :value="item" v-model="info.sex"/>
			{{item}}
		</label>
	</p>
	<p>
		<label>出生年份：</label>
		<select v-model="info.year">
			<option v-for="item in yearArr" :value="item">{{item}}</option>
		</select>
	</p>
	<p>
		<label>兴趣爱好：</label>
		<label v-for="item in likeArr">
			<input type="checkbox" :value="item" v-model="info.like"/>
			{{item}}
		</label>
	</p>
	<p>
		<label>个性签名：</label>
		<textarea v-model="info.sign"></textarea>
	</p>
	<button @click="handleModifyAction()">完成修改</button>
	<button @click="cancelModifyAction()">取消修改</button>
</div>
</template>

<script>
export default {
	name: 'modify-card',
	props:{
		data: Object
	},
	data(){
		return {
			sexArr: ['男', '女'],
			yearArr: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997],
			likeArr: ['吃', '喝', '玩', '乐'],
			info: Object.assign({}, this.data)
			
		}
	},
	methods: {
		handleModifyAction(){
			//修改过的新值传给app
			
			this.$emit('modify-finish', 
			//修改过的新值
				this.info
			);
		},
		cancelModifyAction(){
			this.$emit('modify-finish');
		}
	}
}
</script>

<style>
</style>
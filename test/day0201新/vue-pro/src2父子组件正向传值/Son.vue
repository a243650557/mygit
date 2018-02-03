<template>
<div class="son">
	<h1>子组件</h1>
	<p>接收到的值：{{data}}</p>
	<p>接收到的值：{{title}}</p>
	<p>接收到的值：{{obj}}</p>
	<p>接收到的值：{{show}}</p>
	
	<ul>
		<li v-for="item in myArr">
			{{item}}
		</li>
	</ul>
	
	myObj:{{myObj}}
	<br />
	obj:{{obj}}
</div>
</template>

<script>
export default {
	name: 'son',
	//内部属性
	data(){
		return {
			myArr: [...this.arr],//赋初始值
			myObj: Object.assign({}, this.obj)
		}
	},
	//计算属性
	computed:{
		
	},
	//外部属性
	//props接收外部标签中属性
	//单向数据流：外部属性只可以使用，不可以更改
	//如果需要修改外部数据，将外部数据转为内部数据
//	props: ['data', 'title', 'obj', 'show', 'arr'],
	props: {//属性校验
		data: String,
		title: String,
		obj: Object,
		show: Boolean,
		arr: Array
	},
	
	mounted(){
		console.log(this.show);
		console.log(this.arr);
//		this.myArr = this.myArr.map((item)=>{
//			return 'item'+item
//		})
	
		this.myArr.splice(0, 1, 'test')
		
		this.myObj.name = 'lisi';
		
//		this.show = false;
	}
}
</script>

<style>
</style>
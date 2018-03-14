<template>
<div class="page" id="discover">
	<h1>发现</h1>
	
	<input type="checkbox" v-model="isShow" />
	
	<!-- 使用动画，变换box, transiton包裹的内容，是会删除或者是display=none -->
	<!--
		当标签显示时：给标签添加class名字： name-enter  
								name-enter-to
								name-enter-active
		当标签隐藏时：给标签添加class名字： name-leave  
								name-leave-to
								name-leave-active
	-->
	
	<!--<transition name="test">
		<div class="box" v-show="isShow"></div>
	</transition>-->
	
	<!-- 自定义动画的class名字 -->
	<transition 
		enter-class="" enter-to-class="" enter-active-class="rollIn"
		leave-active-class="hinge">
		<div class="box" v-show="isShow"></div>
	</transition>
	
	
	<transition-group
		enter-class="" enter-to-class="" enter-active-class="rollIn"
		leave-active-class="hinge">
		<div class="box1" key="1" v-show="isShow">box1</div>
		<div class="box2" key="2" v-show="isShow">box2</div>
	</transition-group>
</div>
</template>

<script>
export default {
	data(){
		return {
			isShow: true
		}
	}
}
</script>

<style>
#discover{
	background: lightblue;
}
.box{
	width: 150px;
	height: 150px;
	background: red;
}
.box1, .box2{
	width: 100px;
	height: 100px;
	background: palegreen;
	margin: 10px;
}


/*.test-enter{
	transform: translateY(-200px);
}  
.test-enter-to{
	transform: translateY(0);
}
.test-enter-active{
	transition: 2s transform;
}*/

@keyframes enter-ani{
	from{transform: translateY(-200px);}
	to{transform: translateY(0);}
}
.test-enter-active{
	animation: enter-ani 1s;
}

/*.test-leave{
	transform: translateY(0);
}  
.test-leave-to{
	transform: translateY(600px);
}
.test-leave-active{
	transition: 2s transform;
}*/
@keyframes leave-ani{
	from{transform: translateY(0);}
	to{transform: translateY(600px);}
}
.test-leave-active{
	animation: 1s leave-ani;
}

.rollIn{
	animation-duration: 500ms;
}
.hinge{
	animation-duration: 800ms;
}

</style>
<template>
<div class="show">
  <h1>查看</h1>
  <p>姓名：{{showData.name}}</p>
  <p>姓名：{{showData.sex}}</p>
  <p>姓名：{{showData.sign}}</p>
  <button @click="finishAction()">完成</button>
</div>
</template>

<script>
export default {
  name: 'show',
  data(){
  	return {
  		showData: {}
  	}
  },
  methods: {
  	finishAction(){
  		this.$emit('finish-show');	
  	}
  },
  created(){
  	//监听需要查看的数据
  	this.$center.$on('show-data', (data)=>{
  		this.showData = data;
  	});
  }
}
</script>
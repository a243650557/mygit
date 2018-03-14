<template>
<page :headerConfig="headerData" :isSubpage="true" :canLoadMore="false">
	
	<input type="text" v-model="keyword"/>
	
	<ul>
		<li class="one-border-bottom" v-for="item in addressList" @click="selectAddress(item)">
			<h3>{{item.name}}</h3>
			<p>{{item.address}}</p>
		</li>
	</ul>
	
</page>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {getAddressListByKeyword} from '../../services/homeService.js'
export default {
	data(){
		return {
			keyword: '',
			addressList: [],
			headerData: {
				title: '请选择收货地址',
				isShow: true	
			}
		}
	},
	computed: {
		...mapState({
			lon: state=>state.address.longitude,
			lat: state=>state.address.latitude
		})
	},
	watch: {
		keyword(){
			clearTimeout(this.timer);
			this.timer = setTimeout(()=>{
				console.log('变化了');
				this.requestData();
			}, 1000);
		}
	},
	methods: {
		...mapActions({
			selectLocation: 'address/selectLocation'
		}),
		requestData(){
			getAddressListByKeyword({
				keyword: this.keyword,
				offset: 0,
				limit: 20,
				latitude: this.lat,
				longitude: this.lon
			})
			.then(result=>{
				this.addressList = result;
			})
		},
		//选择地址的点击事件
		selectAddress(item){
			//1.告诉全局状态新的地址，其他相关组件需要更新数据
			this.selectLocation({
				lon: item.lon,
				lat: item.lat
			});
			//2.返回上一页
			this.$router.back();
		}
	
	}
}
</script>

<style>
</style>
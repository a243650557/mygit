<template>
<ul class="list">
	<li class="item one-border-bottom" v-for="(item, i) in listData">
		<div class="item-logo">
			<img :src="item.logo" />
		</div>
		<div class="item-content">
			<h3>{{item.name}}</h3>
			
			<div class="activity-wrapper one-border-top">
				<ul class="activity-list">
					<li class="activity-item" v-for="(act, j) in item.activities" v-show="j<2 || item.isShowAct">
						<letter :name="act.name" :color="act.color"></letter>{{act.des}}
					</li>
				</ul>
				<span class="handle" v-if="item.activities.length>2" @click.stop="showActivtiy(i)">
					{{item.activities.length}}个活动
				</span>
			</div>
		</div>
	</li>
	
</ul>
</template>

<script>
import Letter from '../../../common/Letter.vue'
import {getSellerListData} from '../../../services/homeService.js'
export default{
	name: 'app-list',
	components: {
		[Letter.name]: Letter
	},
	props: {
		flag: String
	},
	data(){
		return {
			limit: 10,
			listData: []
		}
	},
	computed: {
		offset(){
			return this.listData.length;
		}
	},
	methods: {
		requestData(callback){
			let options = null;
			if(this.flag == 'home'){
				options = {
					latitude: '22.54286',
					longitude: '114.059563',
					offset: this.offset,
					limit: this.limit,
					extras: ['activities', 'tags'],
					extra_filters: 'home',
					rank_id: 'c8dbfdfc58494611ba420edae7b12df1',
					terminal: 'h5'
				};
			};
			//请求商家列表数据
			getSellerListData(options)
			.then(result=>{
				console.log(result);
				this.listData = [...this.listData, ...result];
				//如果是加载更多执行的请求数据，需要关闭加载更多
				if(callback){
					callback();
				}
			})
		},
		showActivtiy(index){
			//显示隐藏活动
			this.listData[index].isShowAct = !this.listData[index].isShowAct;
			//更新完dom之后，刷新滚动视图
			this.$nextTick(()=>{
				this.$emit('refresh-page');
			})
		}
	},
	mounted(){
		//获得初始数据
		this.requestData();
		
		//上拉加载更多
	}
}
</script>

<style scoped>
.list .item{
	display: flex;
	padding: 8px;
	box-sizing: border-box;
}
.item .item-logo{
	width: 60px;
	height: 60px;
}
.item .item-logo img{
	width: 100%;
}
.item .item-content{
	margin-left: 10px;
	flex: 1;
}
.item .item-content h3{
	font-size: 14px;
	font-weight: bold;
}

.activity-list .activity-item{
	font-size: 12px;
	color: #666;
	/*height: 18px;*/
	line-height: 18px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 200px;
}
.activity-wrapper{
	position: relative;
}
.activity-wrapper .handle{
	position: absolute;
	top: 4px;
	right: 4px;
	font-size: 12px;
	color: #999;
}
</style>
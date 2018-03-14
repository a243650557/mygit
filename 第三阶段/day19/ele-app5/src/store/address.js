const state = {
	longitude: '',
	latitude: ''
};

const mutations = {
	modifyLon(state, params){
		state.longitude = params.value;
	},
	modifyLat(state, params){
		state.latitude = params.value;
	}
};

const actions = {
	//定位方法
	getLocation(context){
		//html5定位方法
//		navigator.geolocation.getCurrentPosition(
//			(position)=>{//定位成功，获得用户位置信息
//				let lon = position.coords.longitude;
//				let lat = position.coords.latitude;
//				//赋值给全局状态
//				context.commit('modifyLon', {value: lon});
//				context.commit('modifyLat', {value: lat});
//			}
//		)
		
		setTimeout(function(){
			context.commit('modifyLon', {value: 114.059563});
			context.commit('modifyLat', {value: 22.54286});
		}, 3000);
		
	},
	//修改地址的方法,用户在地址页面选择地址，修改全局状态
	selectLocation(context, params){
		context.commit('modifyLon', {value: params.lon});
		context.commit('modifyLat', {value: params.lat});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
}

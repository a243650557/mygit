import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import userModule from './userModule.js'

//全局状态
const state = {
	message: 'hello vuex',
	title: 'ele'
};

//全局计算状态,如果state的值没有变，getters会只是缓存值
const getters = {
	msgLen(state){
		console.log(1);
		return state.message.length;
	}
}

//操作state的方法, 只做state的修改，不做逻辑运算
const mutations = {
	modifyMessage(state, params){
		console.log('modifyMessage方法触发了');
		state.message = params.value;
	},
	modifyTitle(){
		console.log('modifyTitle方法触发了');
	}
};

//state的逻辑操作，可以包含异步操作
const actions = {
	getMessageAction(context, params){
		setTimeout(function(){
			console.log('请求到了后台数据');
			var msg = 'hello vue';
			
			context.commit('modifyMessage', {
				value: msg
			});
			
		}, 2000);
	},
	userSelectMessageAction(context, params){
		var msg = 'hello ' + params.value;
		context.commit('modifyMessage', {
			value: msg
		});
	}
}



//创建管理全局数据的仓库
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		'user': userModule
	}
});


export default store;

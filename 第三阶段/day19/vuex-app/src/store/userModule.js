//模块状态
const state = {
	username: 'zhangsan',
	password: '',
	img: '',
	address: ''
};

//模块计算状态
const getters = {
	nameLen(state){
		return state.username.length;
	}
}

const mutations = {
	modifyUsername(state, params){//state是该模块内部state
		console.log('modifyUsername触发了 ');
		console.log(rest);
	}
};

const actions = {
	usernameAction(context, params){
		console.log('usernameAction触发了 ');
		
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}

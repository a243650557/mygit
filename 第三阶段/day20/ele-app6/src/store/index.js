import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import addressModule from './address'

export default new Vuex.Store({
	modules: {
		address: addressModule
	}
});

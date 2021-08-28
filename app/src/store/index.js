import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isAuth: false
	},
	mutations: {
		SET_AUTH(state, payload) {
			return (state.isAuth = payload);
		}
	},
	actions: {},
	modules: {}
});

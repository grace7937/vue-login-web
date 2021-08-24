import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveUserToCookie,
	saveAuthToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		async LOGIN({ commit, userData }) {
			const { data } = await loginUser(userData);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			console.log(this.$store.state.token);
			this.logMessage = `${data.user.username} 님 환영합니다.`;
			return data;
		},
	},
	modules: {},
});

<template>
	<header class="header">
		<template v-if="isLogin">
			<span>{{ username }} 님 안녕하세요.</span>
			<a href="javascript:;" @click="logoutUser">Logout</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인 </router-link>
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
import { mapState } from 'vuex';
import { deleteCookie } from '@/utils/cookies';
export default {
	// data() {
	// 	return {
	// 		username: this.$store.state.username,
	// 	};
	// },
	computed: {
		...mapState({
			username: state => state.username,
		}),
		isLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>

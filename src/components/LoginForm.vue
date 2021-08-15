<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id:</label>
				<input id="username" type="text" v-model="username" />
			</div>
			<div>
				<label for="password">pw:</label>
				<input id="password" type="text" v-model="password" />
			</div>
			<button type="submit">로그인</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.logMessage = `${data.user.username} 님 환영합니다.`;
				this.initForm();
			} catch (error) {
				console.log(error.response.data);
			}
		},

		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>

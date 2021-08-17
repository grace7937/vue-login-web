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
			<button V-bind:disabled="!isUsernameValid || !password" type="submit">
				로그인
			</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
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
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.$router.push('/main');
				this.logMessage = `${data.user.username} 님 환영합니다.`;
				this.initForm();
			} catch (error) {
				this.logMessage = error.response.data;
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

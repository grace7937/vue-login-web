<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="title">Title</label>
				<input id="title" type="text" v-model="title" />
			</div>
			<div>
				<label for="contents">Contents</label>
				<textarea id="contents" type="text" rows="5" v-model="contents" />
				<p v-if="!isContentsValid">Contents length must be less than 200</p>
			</div>
			<button type="submit">create</button>
		</form>
		<p class="log">{{ logMessage }}</p>
	</div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
				console.log(response.data.data);
			} catch (error) {
				console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
	computed: {
		isContentsValid() {
			return this.contents.length < 200;
		},
	},
};
</script>

<style>
.log {
	color: rgb(155, 47, 47);
}
</style>

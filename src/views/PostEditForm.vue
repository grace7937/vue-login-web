<template>
	<div>
		<div>생성 페이지</div>
		<PostAddForm />
	</div>
</template>

<script>
import PostAddForm from '@/components/posts/PostAddForm.vue';
import { editPost } from '../api/posts';
export default {
	components: {
		PostAddForm,
	},

	methods: {
		async submitForm() {
			const id = this.$router.params.id;
			try {
				await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
			} catch (error) {
				this.logMessage + error;
			}
		},
	},

	async created() {
		const id = this.$route.params._id;
		const { data } = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
	},
};
</script>

<style></style>

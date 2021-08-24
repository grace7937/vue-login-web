<template>
	<div>
		<h1>Main</h1>
		<LoadingSpinner v-if="isLoading" />
		<ul v-else>
			<PostListItem
				v-for="postItem in postItems"
				:key="postItem._id"
				:postItem="postItem"
			/>
		</ul>
		<router-link to="/add" class="create-button">+</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

import { fetchPosts } from '@/api/index';
export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>

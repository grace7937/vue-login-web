<template>
	<div>
		<h1>Main</h1>
		<ul>
			<PostListItem
				v-for="postItem in postItems"
				:key="postItem._id"
				:postItem="postItem"
			/>
		</ul>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';

import { fetchPosts } from '@/api/index';
export default {
	components: {
		PostListItem,
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

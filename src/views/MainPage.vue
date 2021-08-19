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
		};
	},
	methods: {
		async fetchData() {
			const { data } = await fetchPosts();
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>

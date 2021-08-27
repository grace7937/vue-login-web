<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<i class="icon ion-md-create"></i>
			<i class="icon ion-md-trash" @click=""></i>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		deleteItem() {},
	},
};
</script>

<style></style>

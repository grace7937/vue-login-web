function deletePost(postId) {
	return posts.delete(postId);
}
//학습 노트 1개를 조회하는 API

function fetchPost(postId) {
	return posts.get(postId);
}
function editPost(postId) {
	return posts.put(postId);
}

export { deletePost, fetchPost, editPost };

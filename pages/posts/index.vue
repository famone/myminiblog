<template>
	<div class="posts">
		<input type="text" v-model="postId">
		<button @click="loadPosts()">GET POST</button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			postId: ''
		}
	},
	methods: {
		loadPosts(){
			this.$router.push(`/posts/${this.postId}`)
		}
	}
}
</script>
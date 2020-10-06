<template>
	<div class="col-lg-4">
		<div class="post-preview">
		<img :src="post.img" :alt="post.title">
		<div class="post-content">
			<h3>{{post.title}}</h3>
			<p>{{post.descr}}</p>
			<nuxt-link tag="a" :to="/blog/ + post.id">
				<button class="btn btn-primary">Read more</button>
			</nuxt-link>
		</div>
	  </div>
	</div>
</template>

<script>
	export default{
		props: {
			post: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>
img{
	width: 100%;
	border-radius: 10px;
}
.post-preview{
	margin-bottom: 30px;
}
</style>
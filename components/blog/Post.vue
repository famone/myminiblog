<template>
	<section id="post">
			<div class="container">
				<img :src="post.img" :alt="post.title">
				<h1>{{post.title}}</h1>
				<p>{{post.descr}}</p>
			</div>
		</section>
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

<style scoped>
	img{
		width: 50%;
	}
	#post{
		padding: 30px;
		text-align: center;
	}
</style>
<template>
	<section id="postslist">
		<div class="container">
				<Postspreview v-for="post in posts" :key="post.id" 
				:post="post"/>
		</div>
	</section>
</template>

<script>
import Postspreview from '@/components/blog/Postspreview.vue'

export default{
	components: { Postspreview },
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
#postslist{
	padding:30px;
}
</style>
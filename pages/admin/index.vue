<template>
	<section>
		<postslist :posts="postsLoaded" />
	</section>
</template>



<script>
import postslist from '@/components/blog/Postslist.vue' 

export default{
	components: {postslist},
	layout: 'admin',
	computed:{
		postsLoaded(){
			return this.$store.getters.getPostsLoaded
		}
	}
}
</script>
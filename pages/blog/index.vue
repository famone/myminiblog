<template>
  <div>
   	<intro title="My posts"/>

   	<!-- posts -->

   	<postslist :posts="postsLoaded" />


  </div>
</template>

<script>
import intro from '@/components/UI/Intro.vue'
import postslist from '@/components/blog/Postslist.vue'



export default{
	components: {intro, postslist},
	computed:{
		postsLoaded(){
			return this.$store.getters.getPostsLoaded
		}
	}
}
</script>



<template>
  <div>
   	<promo />
   	<intro title="My last posts"/>

   	<!-- posts -->

   	<postslist :posts="postsLoaded" />
   		
   	<cont />

  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import cont from '@/components/Cont.vue'
import intro from '@/components/UI/Intro.vue'
import postslist from '@/components/blog/Postslist.vue'
import {mapGetters} from 'vuex'



export default{
	components: {promo, cont, intro, postslist},
	// asyncData(){
	// 	return new Promise((resolve, reject)=>{

	// 	})
	// },
	// data(){
	// 	return{
	// 		posts: [
	// 			{
	// 				id: 1,
	// 				title: 'First post',
	// 				descr: 'adk lasknlkasd asdkjl vnkljb asdfjhkjas',
	// 				img: 'https://static.dribbble.com/users/223430/screenshots/5821520/helldribble.png'			
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Second post',
	// 				descr: 'adk lasknlkasd asdkjl vnkljb asdfjhkjas',
	// 				img: 'https://static.dribbble.com/users/223430/screenshots/5280812/dribby2.png'			
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Third post',
	// 				descr: 'adk lasknlkasd asdkjl vnkljb asdfjhkjas',
	// 				img: 'https://static.dribbble.com/users/223430/screenshots/4943683/w.png'			
	// 			},
	// 		]
	// 	}
	// },
	computed:{
		postsLoaded(){
			return this.$store.getters.getPostsLoaded
		}
	}
}
</script>



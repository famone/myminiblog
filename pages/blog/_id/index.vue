<template>
	<div>
		<post :post="postItem"/>

		<nuxt-link tag="a" to="/blog/-MHjXyp8_CSnAi0XQjBw">To 2nd</nuxt-link>

		<Comments :comments="comments"/>
		<newComment />
	</div>
</template>


<script>
import post from '@/components/blog/Post.vue'
import newComment from '@/components/comments/NewComment.vue'
import Comments from '@/components/comments/Comments.vue'
import axios from 'axios'

	export default{
		components: { post, newComment },
		data(){
			return{
				comments: [
					{
						name: 'Alex',
						text: 'dk lasknlkasd asdkjl vnkljb asdfjhkjas'
					},
					{
						name: 'Eugene',
						text: 'dk lasknlkasd asdkjl vnkljb asdfjhkjas'
					}
				]
			}
		},
		async asyncData(context){
			console.log(context)
			let [post] = await Promise.all([
			 axios.get(`https://nuxt-blog-16f8b.firebaseio.com/posts/${context.params.id}.json`)  	
				
				])
			return {
				postItem: post.data
			}
		}
	}
</script>


<template>
	<section id="about">
		<p>{{social}}</p>
		<div class="container">
			<h1>About my blog:</h1>
			
			<no-ssr>
				<intro title="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
				<h5>{{count.name}}</h5>
			</no-ssr>

			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptas nemo earum, assumenda quae sint optio eos error perferendis maiores molestias corporis praesentium magni rem eligendi nesciunt harum. Amet, veniam doloribus ullam totam id, iste nihil perspiciatis. Neque, voluptatum, veritatis.</p>
			<br>
			<img src="@/assets/img/about.jpg" alt="">
			<br><br>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptas nemo earum, assumenda quae sint optio eos error perferendis maiores molestias corporis praesentium magni rem eligendi nesciunt harum. Amet, veniam doloribus ullam totam id, iste nihil perspiciatis. Neque, voluptatum, veritatis.</p>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
import intro from '@/components/UI/Intro.vue'
import axios from 'axios'

export default{
	components: { intro },
	computed: {
		...mapState(['count'])
	},
	async asyncData(context){
		let [social] = await Promise.all([
			 axios.get('https://www.cbr-xml-daily.ru/daily_json.js') 	
				
			])

			return {
				social: social.data.Valute.AUD
			}	  			 

	}

	

}
</script>


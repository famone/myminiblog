<template>
	<div class="header">


		<div class="container">
			<div class="shapka">
				<div class="avatars">
					<div class="avatar"></div>
					<div class="avatar2"></div>
				</div>
				<p>{{preload}}</p>
				<nuxt-link tag="a" to="/">
					<button class="btn btn-primary">BLOG APP</button>
				</nuxt-link>
				<ul>
					<li v-for="link in links">
						<nuxt-link tag="a" :to="link.url">{{link.title}}</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default{
	data(){
		return{
			links: [
				{title: 'Home', url: '/'},
				{title: 'About blog', url: '/about'}
			]
		}	
	},
	computed:{
		...mapState(['preload'])
	}
}
</script>

<style scoped>
.avatars{
	display: flex;
	justify-content: flex-start;
}
ul{
	list-style: none;
	margin: 0;
	padding:0;
}
li{
	display: inline-block;
	margin-right: 25px;
}
.nuxt-link-exact-active{
	color: #000;
	text-decoration: underline;
}
.header{
	padding: 20px 0;
	box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
}
.shapka{
	display: flex;
	justify-content: space-between;
	align-items: center;
}



.avatar{
	background-image: url('https://yt3.ggpht.com/a/AGF-l78yIHOrZfoMzr0yKlZlNj0gV6hvRzleLLrLrQ=s900-c-k-c0xffffffff-no-rj-mo');
	height: 80px;
	width: 80px;
	border-radius: 50px;
	background-position: center;
	background-size: cover;
	position: relative;
    margin-right: 20px;
    transition: all .7s ease;
}
.avatar:before{
	position: absolute;
	content: '';
	height: 15px;
	width: 15px;
	border: 2px #fff solid;
	border-radius: 30px;
	background-color: #00ff38;
	z-index: 10;
	left: 10px;
	bottom: 0;
}
.avatar:hover{
	background-image: url('https://sun9-6.userapi.com/v4OlPrOnBfFCl9Yldsq5SNlV4pu1ysqN3rOtMw/e9-V_tY4AA8.jpg');
}
.avatar2{
	background-image: url('https://sun9-6.userapi.com/v4OlPrOnBfFCl9Yldsq5SNlV4pu1ysqN3rOtMw/e9-V_tY4AA8.jpg');
	height: 80px;
	width: 80px;
	border-radius: 50px;
	background-position: center;
	background-size: 110%;
	position: relative;margin-right: 20px;

}
.avatar2:before{
	position: absolute;
	content: '';
	height: 15px;
	width: 15px;
	border: 2px #fff solid;
	border-radius: 30px;
	background-color: #00ff38;
	z-index: 10;
	left: 10px;
	bottom: 0;
}
</style>
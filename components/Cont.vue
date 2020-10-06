<template>
	<section id="cont">
		<div class="container">
			<h2>Contact me</h2>
			<form @submit.prevent="onSubmit()">
				<label for="">Name</label>
				<input type="text" v-model="user.name">
				<label for="">E-mail</label>
				<input type="text" v-model="user.email">
				<button class="btn btn-primary">Submit</button>
			</form>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		onSubmit(){
			console.log(this.user)
		}
	}

}
</script>

<style scoped>
	input{
		text-align:center;
		width: 100%;
		padding: 15px;
		font-size: 18px;
		margin-bottom: 20px;
		color: #000;
	}
	#cont{
		padding:30px;
		background-color: #4f68f4;
		color: #fff;
		text-align: center;
	}
	.btn{
		width: 100%;
		background-color: red;
	}
</style>
<template>
	<section>
		<div class="container">
			<form action="">
				<label>Post name</label>
				<input type="text" v-model="post.title">
				<label>Post descr</label>
				<input type="text" v-model="post.descr">
				<label>Img link</label>
				<input type="text" v-model="post.img">
				<button class="btn btn-primary" @click.prevent="onSubmit()">Добавить пост</button>
			</form>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
		return{
			post: {
				title: '',
				descr: '',
				img: ''
			}
		}
	},
	methods: {
		onSubmit(){
			this.$emit('submit', this.post)
		}
	}
	}
</script>
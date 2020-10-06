<template>
	<newPostform @submit="onSubmit" />
</template>

<script>
import newPostform from '@/components/admin/Newpostform.vue'

export default{
	layout: 'admin',
	components: {newPostform},
	methods: {
		onSubmit(post){

			this.$store.dispatch('addPost', post)
			.then(()=>{
				this.$router.push('/admin')
			})
		}
	}
}
</script>
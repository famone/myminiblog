<template>
	<section id="comments" v-if="comments">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Комментарии</h2>
				</div>
			</div>	

			<div class="row">
				<div class="comment" v-for="com in comments">
					<h3>{{com.name}}</h3>
					<p>{{com.text}}</p>
				</div>
			</div>
		</div>
	</section>
	
</template>

<script>
export default{
	props: {
		comments: {
			type: Array,
			default: null
		}
	}
}
	
</script>

<style>
#comments{
	padding: 50px 0;
}
.comment{
	margin: 30px 0;
    background: #e0e0e0;
    padding: 20px;
    border-radius: 10px;
}
</style>
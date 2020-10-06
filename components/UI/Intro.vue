<template>
	<div class="container">
		<section class="intro">
			<h2>{{ title }}</h2>
			<slot></slot>
		</section>
	</div>
</template>

<script>
export default{
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.intro{
	width: 100%;
	padding:20px;
	background-color: #4b40e3;
	color: #fff;
	margin-bottom: 10px;
	border-radius: 10px;
}	
h2{
	font-size: 26px;
	margin: 0;
}
</style>
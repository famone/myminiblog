<template>
  <div>
    <Header />

    <intro title="My admin" >
    	<nuxt-link class="link linkWhite" to="/admin">Admin</nuxt-link>
    	<nuxt-link class="link linkWhite" to="/admin/new-post">New post</nuxt-link>
    </intro>
    
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/system/Header.vue'
import intro from '../components/UI/Intro.vue'

export default{
  components: { Header, intro }
}
  
</script>


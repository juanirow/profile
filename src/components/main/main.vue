<template>
  <div>
    <Home/>
    <Header/>
    <About/>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
import Header from '@/components/header/header.vue'
import About from '@/components/about/about.vue'

export default {
    name: 'Main',
    components: {
        Header,
        About,
        Home
    }
}
</script>

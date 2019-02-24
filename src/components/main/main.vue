<template>
  <div>
    <Home/>
    <Header/>
    <About/>
    <Resume/>
    <Skills/>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
import Header from '@/components/header/header.vue'
import About from '@/components/about/about.vue'
import Resume from '@/components/resume/resume.vue'
import Skills from '@/components/skills/skills.vue'

export default {
    name: 'Main',
    components: {
        Header,
        About,
        Home,
        Resume,
        Skills
    }
}
</script>

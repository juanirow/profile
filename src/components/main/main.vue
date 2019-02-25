<template>
  <div>
    <Home/>
    <Header/>
    <About/>
    <Resume/>
    <Skills/>
    <Works/>
    <Facts/>
    <Hire/>
    <Footer/>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
import Header from '@/components/header/header.vue'
import About from '@/components/about/about.vue'
import Resume from '@/components/resume/resume.vue'
import Skills from '@/components/skills/skills.vue'
import Works from '@/components/works/works.vue'
import Facts from '@/components/facts/facts.vue'
import Hire from '@/components/hire/hire.vue'
import Footer from '@/components/footer/footer.vue'

export default {
    name: 'Main',
    components: {
        Header,
        About,
        Home,
        Resume,
        Skills,
        Works,
        Facts,
        Hire,
        Footer
    }
}
</script>

<template>
    <!-- Resume Section -->
    <section id="resume" class="resume-section section-padding">
        <div class="container">
            <h2 class="section-title wow fadeInUp">Resume</h2>
            <Education></Education>
            <Experience></Experience>
        </div><!-- /.container -->
    </section><!-- End Resume Section -->
</template>

<script>
import Education from '@/components/education/education.vue'
import Experience from '@/components/experience/experience.vue'
export default {
      name: 'Resume',
      components: { Education, Experience }
  }
</script>

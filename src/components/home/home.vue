<template>
<div>
  <!-- Home Section -->
  <section id="home" class="tt-fullHeight" data-stellar-vertical-offset="50" data-stellar-background-ratio="0.2">
    <div class="intro">
      <div class="intro-sub">I am Juan Manuel Hernandez Linan</div>
      <h1>Developer<span>Entrepreneur</span></h1>
      <p>
        I am a person totally dedicated to develop web & mobile applications. <br>
        Getting involved with the newest tools and frameworks for the development of my applications
      </p>
      
      <div class="social-icons">
        <ul class="list-inline">
          <li><a href="https://github.com/juanirow"><i class="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/juancho"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://twitter.com/linanjm"><i class="fa fa-twitter"></i></a></li>
        </ul>
      </div> <!-- /.social-icons -->
    </div>
    
    <div class="mouse-icon">
      <div class="wheel"></div>
    </div>
  </section><!-- End Home Section -->

  <Header></Header>
</div>
</template>

<script>

import Header from '@/components/header/header.vue'
export default {
    name: 'Home',
    components: {
        Header
    }
}

</script>

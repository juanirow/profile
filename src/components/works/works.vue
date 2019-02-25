<template>
 <!-- Works Section -->
 <section id="works" class="works-section section-padding">
  <div class="container">
    <h2 class="section-title wow fadeInUp">Works / Events</h2>

    <ul class="list-inline" id="filter">
        <li><a class="active" data-group="all">All</a></li>
        <li><a data-group="android">Android</a></li>
        <li><a data-group="ios">iOs</a></li>
        <li><a data-group="web">Web</a></li>
        <li><a data-group="desktop">Desktop</a></li>
        <li><a data-group="events">Events</a></li>
    </ul>

    <div class="row">
      <div id="grid">
        <template v-for="(item, index) in items">
          <WorksItem
            :key="index"
            :item="item"/>
        </template>
      </div><!-- /#grid -->
    </div><!-- /.row -->
  </div><!-- /.container -->
 </section><!-- End Works Section -->
</template>

<script>
import WorksItem from "@/components/worksItem/worksItem.vue"

export default {
    name: 'Works',
    components: { WorksItem },
    data: () => ({
        items: [
            {
                title: "Total Punch",
                groups: '["all", "android", "ios", "web"]',
                link: "https://play.google.com/store/apps/details?id=com.nakva.boxing&hl=es",
                image: "assets/images/works/totalpunch.jpeg"
            },
            {
                title: "Ntrack",
                groups: '["all", "android"]',
                link: "https://ntrackmx.com/",
                image: "assets/images/works/ntrack.png"
            },
            {
                title: "Cuby",
                groups: '["all", "android", "ios", "web"]',
                link: "https://cuby.mx/",
                image: "assets/images/works/cuby.png"
            },
            {
                title: "Supertimbre",
                groups: '["all", "android", "ios"]',
                link: "http://nakva.mx/",
                image: "assets/images/works/supertimbre.png"
            },
            {
                title: "Arteko",
                groups: '["all", "android", "ios", "web", "desktop"]',
                link: "https://arteko.mx/",
                image: "assets/images/works/arteko.png"
            },
            {
                title: "Hackaton Centro Fox",
                groups: '["all", "events"]',
                link: "http://nakva.mx/",
                image: "assets/images/events/hackaton.png"
            },
            {
                title: "Startup Weekend MEGACENTRO",
                groups: '["all", "events"]',
                link: "http://nakva.mx/",
                image: "assets/images/events/startup.jpg"
            }
        ]
    })
}
</script>


<template>
 <section id="skills" class="skills-section section-padding">
   <div class="container">
     <h2 class="section-title wow fadeInUp">Skills</h2>

     <div class="row">
       <div class="col-md-6">
          <template v-for="(item, index) in itemsLeft">
            <SkillProgress
              :item="item"
              :key="index"
              />
          </template>
       </div><!-- /.col-md-6 -->

       <div class="col-md-6">
          <template v-for="(item, index) in itemsRight">
            <SkillProgress
              :item="item"
              :key="index"
              />
          </template>
       </div><!-- /.col-md-6 -->
     </div><!-- /.row -->

     <div class="skill-chart text-center">
       <h3>More skills</h3>
     </div>

     <div class="row more-skill text-center">
          <template v-for="(item, index) in itemsChart">
            <SkillChart
              :item="item"
              :key="index"
              />
          </template>
     </div>

   </div><!-- /.container -->
 </section><!-- End Skills Section -->
</template>  

<script>
import SkillProgress from '@/components/skillProgress/skillProgress.vue'
import SkillChart from '@/components/skillChart/skillChart.vue'
export default {
    name: 'Skills',
    components: { SkillProgress, SkillChart },
    data: () => ({
        itemsLeft: [
            {
                title: "Kotlin",
                value: 70
            },
            {
                title: "Java",
                value: 80
            },
            {
                title: "MVP",
                value: 85
            },
            {
                title: "Android MVVM",
                value: 75
            },
            {
                title: "Android Room DB",
                value: 80
            },
            {
                title: "Android Data Binding",
                value: 70
            },
        ],
        itemsRight: [
            {
                title: "iOS (Swift)",
                value: 75
            },
            {
                title: "iOS (MVC)",
                value: 70
            },
            {
                title: "Vue.js",
                value: 60
            },
            {
                title: "Angular 4",
                value: 60
            },
            {
                title: "Web Dev",
                value: 70
            },
            {
                title: "Flutter",
                value: 40
            },
        ],
        itemsChart: [
            {
                title: "Leadership",
                value: 88
            },
            {
                title: "Managment",
                value: 90
            },
            {
                title: "Finance",
                value: 85
            },
            {
                title: "Business Model",
                value: 80
            },
            {
                title: "Teamwork",
                value: 90
            },
            {
                title: "Creativity",
                value: 85
            },
        ]

    })
}
</script>

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
       <div class="col-xs-12 col-sm-4 col-md-2">

           <div class="chart" data-percent="91" data-color="e74c3c">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>leadership</span>
                 </div>
             </div>
         </div>

         <div class="col-xs-12 col-sm-4 col-md-2">
           <div class="chart" data-percent="23" data-color="2ecc71">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>Creativity</span>
                 </div>
             </div>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2">
           <div class="chart" data-percent="68" data-color="3498db">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>Management</span>
                 </div>
             </div>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2">
           <div class="chart" data-percent="68" data-color="3498db">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>Branding</span>
                 </div>
             </div>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2">
           <div class="chart" data-percent="68" data-color="3498db">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>Marketing</span>
                 </div>
             </div>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-2">
           <div class="chart" data-percent="68" data-color="3498db">
                 <span class="percent"></span>
                 <div class="chart-text">
                   <span>Motivation</span>
                 </div>
             </div>
         </div>
     </div>

   </div><!-- /.container -->
 </section><!-- End Skills Section -->
</template>  

<script>
import SkillProgress from '@/components/skillProgress/skillProgress.vue'
export default {
    name: 'Skills',
    components: { SkillProgress },
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
        ]
    })
}
</script>

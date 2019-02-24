<template>
            <div class="row">
                <div class="col-md-12">
                    <div class="resume-title">
                        <h3>Experience</h3>
                    </div>
                    <div class="resume">
                        <ul class="timeline">
                          <template v-for="(item, index) in items">
                           <ResumeItem
                             :key="index"
                             :item="item"
                             :index="index"
                             />
                          </template>
                        </ul>
                    </div>
                </div>
            </div><!-- /row -->
</template>

<script>
import ResumeItem from '@/components/resumeItem/resumeItem.vue'
export default {
    name: 'Experience',
    components: { ResumeItem },
    data: () => ({
        items: [
            {
                title: "Android Developer",
                place: "Ntrack",
                date: "2017 - 2019",
                description: "Monitoring System"
            },
            {
                title: "Android Developer",
                place: "Arteko Electronics",
                date: "2014 - 2019",
                description: "This project consist in the development and improvement of the Cuby app.Cuby is a device to control the mini splits (a/c) with your smartphone or computer from anywhere in the world with internet access"
            },
            {
                title: "CO-FOUNDER",
                place: "Nakva",
                date: "2016 - 2019",
                description: "Current Brand that I use to personal projects"
            },
            {
                title: "SOFTWARE ENGINEER",
                place: "Masukoro System",
                date: "2013 - 2015",
                description: "Development of a CRM to a company in San Luis Potosi and a point of sale for the same company"
            },
            {
                title: "LABORATORY ASSISTANT ELECTRONICS AND DIGITAL SYSTEMS",
                place: "Universidad Autonoma de San Luis Potosi",
                date: "2013 - 2015",
                description: "This job consist to teach the newest students, the application of the theory learned on the classroom, This practices consisted in develop solutions to a problems using Integrated circuits and sometimes arduinos"
            }
        ]
    })
  }
</script>

<template>
            <div class="row">
                <div class="col-md-12">
                    <div class="resume-title">
                        <h3>Education</h3>
                    </div>
                    <div class="resume">
                        <ul class="timeline">
                          <template v-for="(item, index) in educationItems">
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
    name: 'Education',
    components: { ResumeItem },
    data: () => ({
        educationItems: [
            {
                title: "ENGLISH COURSE",
                place: "Academic Bringe, Dublin, Ireland",
                date: "2017 - 2018",
                description: "In order to improve my english I decide to live in dublin and study an english course"
            },
            {
                title: "MASTER OF BUSINESS ADMINISTRATION SPECIALIZING IN FINANCE",
                place: "Universidad Tecmilenio SLP",
                date: "2015 - 2017",
                description: "I decided to study this master's degree because I want to collaborate and develop applications oriented in finances and business"
            },
            {
                title: "ANDROID BASICS CERTIFICATE",
                place: "Universidad Autonoma de San Luis Potosi",
                date: "",
                description: "Basic module for the developer of mobile app on the android plataform"
            },
            {
                title: "ENGINEER'S DEGREE, COMPUTER ENGINEERING",
                place: "Universidad Autonoma de San Luis Potosi",
                date: "2008-2014",
                description: "In this school I develop my skills in oriented programming objects and the analysis algorithm development. This was where piqued my interest for web applications and mobile applications"
            }
        ]
    })
}
</script>

<template>
<li
  v-bind:class="{ 'timeline-inverted': index % 2 == 0 }">
     <div class="posted-date">
         <span class="month">{{ item.date }}</span>
     </div><!-- /posted-date 

     <div class="timeline-panel wow fadeInUp">
         <div class="timeline-content">
             <div class="timeline-heading">
                 <h3>{{ item.title }}</h3>
                 <span>{{ item.place }}</span>
             </div><!-- /timeline-heading -->

             <div class="timeline-body">
                 <p>{{ item.description }}</p>
             </div><!-- /timeline-body -->
         </div> <!-- /timeline-content -->
     </div><!-- /timeline-panel -->
 </li>
</template>
<script>
export default {
    name: 'ResumeItem',
    props: {
        item: Object,
        index: Number
    }
}
</script>

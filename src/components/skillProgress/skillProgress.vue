<template>
 <div class="skill-progress">
   <div class="skill-title"><h3>{{item.title}}</h3></div> 
   <div class="progress">
     <div class="progress-bar
                 six-sec-ease-in-out"
          role="progressbar" v-bind:aria-valuenow="item.value"
          aria-valuemin="0" aria-valuemax="100" >
       <span>{{ item.value }}%</span>
     </div>
   </div><!-- /.progress -->
 </div><!-- /.skill-progress -->
</template>

<script>
export default {
    name: 'SkillProgress',
    props: {
        item: Object
    }
}
</script>

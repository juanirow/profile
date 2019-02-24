<template>
 <div class="col-xs-12 col-sm-4 col-md-2">
   <div class="chart"
        v-bind:data-percent="item.value"
        data-color="e74c3c">
        <span class="percent"></span>
        <div class="chart-text">
          <span>{{ item.title }}</span>
        </div>
    </div>
 </div>
</template>
<script>
export default {
   name: 'SkillChart',
   props: {
       item: Object
   }
}
</script>

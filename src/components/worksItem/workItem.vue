<template>
 <div class="portfolio-item col-xs-12 col-sm-4 col-md-3" v-bind:data-groups='item.groups'>
   <div class="portfolio-bg">
     <div class="portfolio">
       <div class="tt-overlay"></div>
       <div class="links">
         <a class="image-link" href="assets/images/works/totalpunch.jpeg"><i class="fa fa-search-plus"></i></a>
         <a v-bind:href="item.link"><i class="fa fa-link"></i></a>                          
       </div><!-- /.links -->
       <img v-bind:src="item.image" alt="image"> 
       <div class="portfolio-info">
         <h3>{{ item.title }}</h3>
       </div><!-- /.portfolio-info -->
     </div><!-- /.portfolio -->
   </div><!-- /.portfolio-bg -->
 </div><!-- /.portfolio-item -->
</template>

<script>
  export default {
      name: 'WorkItem',
      props: {
          item: Object
      }
  }
</script>


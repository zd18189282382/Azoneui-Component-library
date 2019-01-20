<template>
  <div>
    <!--波纹进度条-->
    <div class="container" :style="{width}">
      <div class="warning" :class="[ progressstyle ? 'az-'+progressstyle :'',]">
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    name: "AzProgressBarThird",
     props:{
       width:{
         type:String,
         default: "500px"
       },
       progressstyle:{
         type: String,
         default: ''
       }
     }
    }
</script>

<style scoped>
  @import "../../libs/theme/progressbarthird.css";
</style>

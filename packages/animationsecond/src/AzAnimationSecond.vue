<template>
  <div>
    <!--loading circle-->
    <div class="circle" :class="[ ballsecond ? 'az-'+ballsecond :'',]"></div>
  </div>
</template>

<script>
  export default {
    name: "AzAnimationSecond",
    props:{
      ballsecond:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationsecond.css";
</style>


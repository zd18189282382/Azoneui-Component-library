<template>
  <div>
    <!--loading-->
    <div id="ddr">
      <div class="ddr ddr1" :class="[ article ? 'az-'+article :'',]"></div>
      <div class="ddr ddr2" :class="[ article ? 'az-'+article :'',]"></div>
      <div class="ddr ddr3" :class="[ article ? 'az-'+article :'',]"></div>
      <div class="ddr ddr4" :class="[ article ? 'az-'+article :'',]"></div>
      <div class="ddr ddr5" :class="[ article ? 'az-'+article :'',]"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzAnimation",
    props:{
      article:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animation.css";
</style>


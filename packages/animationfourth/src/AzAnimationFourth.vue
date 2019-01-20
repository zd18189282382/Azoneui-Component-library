<template>
  <div>
    <!--div从下往上滑动-->
    <div class="bottomtotop" :class="[ ballfourth ? 'az-'+ballfourth :'',]" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationFourth",
    props:{
      ballfourth:{
        type:String,
        default:""
      },
      leftlong:{
        type:Number,
        default: 0
      },
      size:{
        type:Number,
        default:120
      },
      toplong:{
        type:Number,
        default: 0
      }
    },
    mounted(){
      // div从下往上滑动
      $(".bottomtotop").click(function(){
        $(".bottomtotop").animate({
          top: "100px"
        },200);
        $(".bottomtotop").animate({
          top: "0px"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationfourth.css";
</style>


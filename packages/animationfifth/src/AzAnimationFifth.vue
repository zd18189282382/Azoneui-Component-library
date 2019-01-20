<template>
  <div>
    <!--div稍微从下往上滑动-->
    <div class="bottomtotoplittle" :class="[ ballfifth ? 'az-'+ballfifth :'',]" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationFifth",
    props:{
      ballfifth:{
        type:String,
        default:''
      },
      leftlong:{
        type:Number,
        default:0
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
      // div稍微从下往上滑动
      $(".bottomtotoplittle").click(function(){
        $(".bottomtotoplittle").animate({
          top: "30px"
        },200);
        $(".bottomtotoplittle").animate({
          top: "0px"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationfifth.css";
</style>


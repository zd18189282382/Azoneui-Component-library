<template>
  <div>
    <!--渐现-->
    <div class="fade-in" :class="[ ballsevteen ? 'az-'+ballsevteen :'',]" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationSevteen",
    props:{
      ballsevteen:{
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
      //渐现
      $('.fade-in').click(function(){
        $(".fade-in").animate({
          opacity:"0"
        },200);
        $(".fade-in").animate({
          opacity:"1"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationsevteen.css";
</style>


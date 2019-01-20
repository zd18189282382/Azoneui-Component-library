<template>
  <div>
    <!--渐隐-->
    <div class="fade-out" :class="[ balleight ? 'az-'+balleight :'',]" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationEighteen",
    props:{
      balleight:{
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
      //渐隐
      $('.fade-out').click(function(){
        $(".fade-out").animate({
          opacity:"1"
        },200);
        $(".fade-out").animate({
          opacity:"0"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationeighteen.css";
</style>


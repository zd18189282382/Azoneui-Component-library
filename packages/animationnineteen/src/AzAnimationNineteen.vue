<template>
  <div>
    <!--360度旋转-->
    <div class="rotate" :class="[ ballnineteen ? 'az-'+ballnineteen :'',]" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px'}">
    <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzAnimationNineteen",
    props:{
      ballnineteen:{
        type:String,
        default:""
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
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationnineteen.css";
</style>


<template>
  <div>
    <div id="az-tooltip">鼠标移入</div>
    <slot></slot>
  </div>
</template>

<script>
    import {tooltip} from '../../libs/tooltip.js'
    export default {
        name: "AzToolTip",
        components:{tooltip}
    }
</script>

<style scoped>
  @import "../../libs/theme/tooltip.css";
</style>

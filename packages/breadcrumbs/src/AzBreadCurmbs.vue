<template>
  <div class="breads">
    <span class="bread">
        <a  v-for="i in breads" :href="i.http"><cite>{{i.httptext}}</cite></a>
    </span>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzBreadCurmbs",
    props:{
      breads:{
        type:Array,
        default:[
          {
            "http":"www.baidu.com",
            "httptext":"首页  /"
          },
          {
            "http":"www.baidu.com",
            "httptext":"系统管理  /"
          },
          {
            "http":"www.baidu.com",
            "httptext":"系统日志"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/breadcurmbs.css";
</style>

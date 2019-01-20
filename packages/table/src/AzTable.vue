<template>
  <div class="table">
    <!--静态表格-->
    <table class="tables tables1">
      <thead>
        <tr>
          <th v-for="p in theadtext" :class="[ tabletext1 ? 'az-'+tabletext1 :'',]">{{p}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="i in tbodytext1">{{i}}</td>
        </tr>
        <tr>
          <td v-for="a in tbodytext1">{{a}}</td>
        </tr>
        <tr>
          <td v-for="b in tbodytext1">{{b}}</td>
        </tr>
        <tr>
          <td v-for="c in tbodytext1">{{c}}</td>
        </tr>
        <tr>
          <td v-for="d in tbodytext1">{{d}}</td>
        </tr>
        <tr>
          <td v-for="e in tbodytext1">{{e}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 export default {
   name: "AzTable",
   props:{
     theadtext:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     } ,
     tabletext1:{
       type: String,
       default: ''
     },
     tbodytext1:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     },
     tbodytext2:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     },
     tbodytext3:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     },
     tbodytext4:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     },
     tbodytext5:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     },
     tbodytext6:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     }
   }
 }
</script>

<style scoped>
  @import "../../libs/theme/table.css";
</style>

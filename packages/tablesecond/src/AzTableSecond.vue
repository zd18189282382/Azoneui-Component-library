<template>
  <div class="table">
    <!--有全选反选功能的表格-->
    <table class="tables">
      <thead>
        <tr>
          <th>
            <div class="check">
              <input type="checkbox" class="input_check" id="cbAll">
              <label></label>
            </div>
          </th>
          <th  v-for="sp in stheadtext" :class="[ stabletext1 ? 'az-'+stabletext1 :'',]">{{sp}}</th>
        </tr>
      </thead>
      <tbody id="tb">
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="si in stbodytext1">{{si}}</td>
        </tr>
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="sa in stbodytext2">{{sa}}</td>
        </tr>
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="sb in stbodytext2">{{sb}}</td>
        </tr>
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="sc in stbodytext3">{{sc}}</td>
        </tr>
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="sd in stbodytext4">{{sd}}</td>
        </tr>
        <tr>
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="se in stbodytext5">{{se}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 export default {
   name: "AzTableSecond",
 props:{
   stheadtext:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stabletext1:{
     type: String,
   default:
     ''
   }
 ,
   stbodytext1:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stbodytext2:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stbodytext3:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stbodytext4:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stbodytext5:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 ,
   stbodytext6:{
     type:Array,
   default:
     ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   }
 },
   methods:{
     check(){
       var all = document.getElementById("cbAll");
       var tbody = document.getElementById("tb");
       var checkboxs = tbody.getElementsByTagName("input");

       all.onclick = function() {
         for (var i = 0; i < checkboxs.length; i++) {
           var checkbox = checkboxs[i];
           checkbox.checked = this.checked;
         }
       };

       for (var i = 0; i < checkboxs.length; i++) {
         checkboxs[i].onclick = function() {
           var isCheckedAll = true;
           for (var i = 0; i < checkboxs.length; i++) {
             if (!checkboxs[i].checked) {
               isCheckedAll = false;
               break;
             }
           }
           all.checked = isCheckedAll;
         };
       }
     }
   },
   mounted() {
     this.check()
   }
 }
</script>

<style scoped>
  @import "../../libs/theme/tablesecond.css";
</style>

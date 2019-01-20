import AzToolTip from "./src/AzToolTip"

AzToolTip.install = function (Vue,opts) {
  Vue.component(AzToolTip.name,AzToolTip)
}

export default AzToolTip

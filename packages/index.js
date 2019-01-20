import button from "./button"
import form from "./form"
import popup from "./popup"
// import search from "./search"
// import skin from "./skin"
import shopCart from "./shopCart"
import toolTip from "./tooltip"
import azinput from "./input"
import azrow from "./row"
import dropDownMenu from "./dropDownMenu"
import azfold from "./fold"
import azdate from "./date"
import tool from "./tool"
import rate from "./rate"
import yzm from "./yzm"
import yzm3 from "./yzm3"
import yzm4 from "./yzm4"
import accordion from "./accordion/"
import azcomm from "./communication"
import azuploader from "./uploader"
import azcolorpicker from "./colorPicker"
import threeShuffing from './threeShuffing'
import tab from './tab'
import progressbar from './progressbar'
import table from './table'
import tablesecond from './tablesecond'
import animation from './animation'
import animationsecond from './animationsecond'
import theslider from './theslider'
import theslidersecond from './theslidersecond'
import animationthird from './animationthird'
import animationfourth from './animationfourth'
import animationfifth from './animationfifth'
import animationsixteen from './animationsixteen'
import animationsevteen from './animationsevteen'
import animationeighteen from './animationeighteen'
import animationnineteen from './animationnineteen'
import progressbarsecond from './progressbarsecond'
import progressbarthird from './progressbarthird'



const AzoneUI = {};

AzoneUI.install = function (Vue,opts) {
  Vue.component(button.name,button),
  Vue.component(form.name,form),
  Vue.component(popup.name,popup),
  // Vue.component(search.name,search)
  // Vue.component(skin.name,skin)
  Vue.component(shopCart.name,shopCart),
  Vue.component(toolTip.name,toolTip),
  Vue.component(azinput.name,azinput),
  Vue.component(azrow.name,azrow),
  Vue.component(dropDownMenu.name,dropDownMenu),
  Vue.component(azfold.name,azfold),
  Vue.component(azdate.name,azdate),
  Vue.component(tool.name,tool),
  Vue.component(rate.name,rate),
  Vue.component(yzm.name,yzm),
  Vue.component(yzm3.name,yzm3),
  Vue.component(yzm4.name,yzm4),
  Vue.component(accordion.name,accordion),
  Vue.component(azcomm.name,azcomm),
  Vue.component(azuploader.name,azuploader),
  Vue.component(azcolorpicker.name,azcolorpicker),
  Vue.component(threeShuffing.name,threeShuffing),
  Vue.component(tab.name,tab),
  Vue.component(progressbar.name,progressbar),
  Vue.component(table.name,table),
  Vue.component(animation.name,animation),
  Vue.component(theslider.name,theslider),
  Vue.component(theslidersecond.name,theslidersecond),
  Vue.component(animationsecond.name,animationsecond),
  Vue.component(animationthird.name,animationthird),
  Vue.component(animationfourth.name,animationfourth),
  Vue.component(animationfifth.name,animationfifth),
  Vue.component(animationsixteen.name,animationsixteen),
  Vue.component(animationsevteen.name,animationsevteen),
  Vue.component(animationeighteen.name,animationeighteen),
  Vue.component(animationnineteen.name,animationnineteen),
  Vue.component(progressbarsecond.name,progressbarsecond),
  Vue.component(progressbarthird.name,progressbarthird),
  Vue.component(tablesecond.name,tablesecond)

};


export default AzoneUI

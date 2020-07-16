import Vue from "vue";
import "./css/vue-rt-style-kit-aks.styl";
import Project from "@projectAks";

import {
  ACHeader
} from "./components";


const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyleAks) {
      Vue.component(ACHeader.name, ACHeader);
      Vue.RtStyleAks = true;
    }
  }
};
const version = Project.version;
if (typeof window !== 'undefined') {




// @Deprecated
  window.RTK_STYLE_KIT_AKS_VER = version;
  window.addEventListener('getVueRtStyleVersion', function () {
    window.postMessage({from: "vue-rt-style-kit", type: "setVersion", label: "aks", version: version}, "*");
  })
}
VueRtStyle.version = version;

export default VueRtStyle;
export {
  ACHeader
}

import Vue from "vue";
import "./css/vue-rt-style-kit-aks.styl";
import Project from "@projectAks";

import {
  ACArchiveComponent,
  ACConfirmationPopup,
  ACCreationPopup,
  ACFooter,
  ACHeader,
  ACInvitationPopup,
  ACListComponent,
  ACManagePopup,
  ACPhonebookComponent,
  ACSettingsPopup
} from "./components";


const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyleAks) {
      Vue.component(ACArchiveComponent.name, ACArchiveComponent);
      Vue.component(ACConfirmationPopup.name, ACConfirmationPopup);
      Vue.component(ACCreationPopup.name, ACCreationPopup);
      Vue.component(ACFooter.name, ACFooter);
      Vue.component(ACHeader.name, ACHeader);
      Vue.component(ACInvitationPopup.name, ACInvitationPopup);
      Vue.component(ACListComponent.name, ACListComponent);
      Vue.component(ACManagePopup.name, ACManagePopup);
      Vue.component(ACPhonebookComponent.name, ACPhonebookComponent);
      Vue.component(ACSettingsPopup.name, ACSettingsPopup);
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
  ACArchiveComponent,
  ACConfirmationPopup,
  ACCreationPopup,
  ACFooter,
  ACHeader,
  ACInvitationPopup,
  ACListComponent,
  ACManagePopup,
  ACPhonebookComponent,
  ACSettingsPopup
}

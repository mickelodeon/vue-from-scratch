import Vue from "vue";
import App from "@src/vue/App";
import SvgIcon from "vue-svgicon";

import "@src/styles/main.scss";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(SvgIcon, {
  tagName: "svgicon"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

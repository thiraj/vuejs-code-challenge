import Vue from "vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueLodash, { lodash: lodash });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

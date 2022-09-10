import Vue from 'vue'
import App from './App.vue'

import router from './router'
import i18n from './i18n'

//vuetify import
import vuetify from './plugins/vuetify'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  disableClick: false,
  namespace: 'test'
})

// import VueScrollProgress from "vue-scroll-progress";
//
// Vue.use(VueScrollProgress);
//
// import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
//
// Vue.use(VueScrollProgressBar)

// bootstrap-vue
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import scss file
require('@/assets/styles/main.scss');

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
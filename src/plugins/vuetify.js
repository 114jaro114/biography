import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import Vuetify from 'vuetify';
import {
  Scroll
} from 'vuetify/lib/directives'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import {
  Ripple
} from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  directives: {
    Ripple,
    Scroll
  }
});

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#1976d2',
        accent: '#1feaea',
        secondary: '#EEEEEE',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#EA1616',
        background: '#333333',
        anyColor: '#1feaea',
      },
      light: {
        primary: '#1976d2',
        accent: '#1feaea',
        secondary: '#ffffff',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#EA1616',
        background: '#f5f5f5',
        anyColor: '#1feaea',
      }
    },
  }
});
import Vue from 'vue'
import App from './App'
import router from './router'
import VuesticPlugin from 'vuestic-ui/src/components/vuestic-plugin'
import { firestorePlugin } from 'vuefire'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'

export const ColorThemePlugin = {
  install ( Vue, options ) {
    Vue.prototype.$themes = Object.assign( {}, {
      success: '#40e583',
      info: '#2c82e0',
      danger: '#e34b4a',
      warning: '#ffc200',
    }, options )
    Vue.observable( Vue.prototype.$themes )
  },
}


Vue.use( VuesticPlugin )
Vue.use( firestorePlugin )
Vue.use( VueCarousel )
Vue.use( ColorThemePlugin, {} )

new Vue( {
  created () { AOS.init() },
  el: '#app',
  router,
  render: h => h( App ),
} ).$mount( '#app' )

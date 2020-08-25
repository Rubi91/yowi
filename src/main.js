import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueResource from 'vue-resource'
import('./styles/colors.css')
import('./styles/globals.css')

Vue.prototype.$axios = axios
Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

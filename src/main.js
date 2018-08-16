import Vue from 'vue'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

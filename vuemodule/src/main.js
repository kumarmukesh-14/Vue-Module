import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import myOrderModule from './modules/myOrders'
import subscriptionModule from './modules/subscriptions'

import {registerModules} from './register-modules'

registerModules ({
  myOrder: myOrderModule,
  subscription : subscriptionModule
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const numberDisplay = Vue.observable({
  count:0
});

new Vue({
  render: h => h(App),
}).$mount('#app')

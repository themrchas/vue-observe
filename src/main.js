import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const numberDisplay = Vue.observable({
  count:0
});

export const objectObservable = Vue.observable({
  entry: {
    name: "Beavis",
    age: 23,
    address: "23 Wilshire Lane"
  }
})

export const blah = "blahblah"

new Vue({
  render: h => h(App),
}).$mount('#app')

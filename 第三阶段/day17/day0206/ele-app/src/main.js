import Vue from 'vue'
import App from './App'
import router from './router'

import Page from './common/Page.vue'

Vue.component(Page.name, Page);

new Vue({
  el: '#app',
  router,
  
//render: h=>h(App)
  
  
  
  components: { 
  	App: App
  },
  template: '<App/>'
})

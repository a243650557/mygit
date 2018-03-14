import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Page from './common/Page.vue'

Vue.component(Page.name, Page);

new Vue({
  el: '#app',
  router,
  store,//配置全局状态管理对象
  
//render: h=>h(App)
  
  
  
  components: { 
  	App: App
  },
  template: '<App/>'
})



//import axios from 'axios'
//
//axios.get('/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
//.then(response=>{
//	console.log(response);
//})
//.catch(error=>{
//	console.log(error);
//})









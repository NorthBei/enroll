import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import QueryStudent from "@/components/QueryStudent.vue";
import BatchDate from "@/components/BatchDate.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  routes:[
    { path: '/queryStudent', component: QueryStudent },
    { path: '/batchDate', component: BatchDate }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

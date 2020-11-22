import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";
import Person from "./components/Person";
import Post from "./components/Post";

const routes = [
  {path: '/', component: Index},
  {path: '/browse', component: Browse},
  {path: '/login', component: Login},
  {path: '/people/:id', name: "people", component: Person},
  {path: '/posts/:id', name: "posts", component: Post},
];
const router = new VueRouter({routes});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

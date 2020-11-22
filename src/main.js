import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";
import {AxiosInstance as axios} from "axios";

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
    profile: axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'),
    posts: axios.get('https://private-anon-cb48b9226c-wad20postit.apiary-mock.com/posts'),
    people: axios.get('https://private-anon-3cd350211a-wad20postit.apiary-mock.com/profiles'),
  },
  mutations: {
    toggleLike: (state, id) => {
      state.posts[id].liked = !state.posts[id].liked;
    },
    toggleSubscribe: (state, id) => {
      state.people[id].subscribed = !state.people[id].subscribed;
    }
  },
  getters: {
    getPost: (state) => (id) => {
      return state.posts[id];
    },
    getPerson: (state) => (id) => {
      return state.people[id];
    },
    getProfile: (state) => {
      return state.profile;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

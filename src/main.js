import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
const axios = require('axios');

import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', component: Index},
  {path: '/browse', component: Browse},
  {path: '/login', component: Login},
];

const router = new VueRouter({routes});

let profile = axios.get('https://private-anon-3e8f2d9a55-wad20postit.apiary-mock.com/users/1');
let posts = axios.get('https://private-anon-cb48b9226c-wad20postit.apiary-mock.com/posts');
let people = axios.get('https://private-anon-3cd350211a-wad20postit.apiary-mock.com/profiles');

Promise.all([profile, posts, people]).then(([profile, posts, people]) => {
  console.log("INITIAL STATE") 
  console.log("WARNING, STATE IS QUERYED WHEN PROPERTIES ARE EXPANDEND")
  console.log( {
    profile:profile.data,
    posts:posts.data,
    people:people.data,
  });
  const store = new Vuex.Store({
    state: {
      profile:profile.data,
      posts:posts.data,
      people:people.data,
    },
    mutations: {
      toggleLike: (state, id) => {
        // MEANS: state.posts[id].liked = !state.posts[id].liked;
        Vue.set(state.posts[id], 'liked', !state.posts[id].liked);
      },
      toggleSubscribe: (state, id) => {
        // MEANS: state.people[id].subscribed = !state.people[id].subscribed;
        Vue.set(state.people[id], 'subscribed', !state.people[id].subscribed);
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
    components: {Browse},
    render: h => h(App),
  }).$mount('#app');
  
});


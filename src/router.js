import Vue from 'vue';
import Router from 'vue-router';
import List from './components/List.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

export default new Router({
  mode: '',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/joblist',
      name: 'List',
      component: List
    },
    {
      path: '/jobdetail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
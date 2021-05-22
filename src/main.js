import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
import VueAgile from 'vue-agile'
import VueCarousel from 'vue-carousel';
import ScrollFixedHeader from 'vuejs-scroll-fixed-header';


Vue.config.productionTip = false
Vue.use(VueAgile)
Vue.use(VueCarousel);
Vue.use(ScrollFixedHeader)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

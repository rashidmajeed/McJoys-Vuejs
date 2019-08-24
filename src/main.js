import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import VueScrollReveal from 'vue-scroll-reveal';
import VueResource from 'vue-resource'

Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdCard)
Vue.use(VueScrollReveal, {
duration:800,
scale:1,
distance:'50px'
});
Vue.use(VueResource)

Vue.http.options.root ='https://mcjoys-vuejs.firebaseio.com/';

new Vue({
  el: '#app',
  render: h => h(App)
})

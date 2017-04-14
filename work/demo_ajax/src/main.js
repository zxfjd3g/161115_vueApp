import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app.vue'

Vue.use(VueResource)

/*eslint-disable no-new*/
new Vue({
  el: 'body',
  components: {
    App
  }
})

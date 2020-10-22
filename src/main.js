import Vue from 'vue'
import App from './App.vue'

// Tailwind
import '@/assets/css/tailwind.css'


// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faEye,faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

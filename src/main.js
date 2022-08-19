import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';


createApp(App).use(router).use(VueCarousel).mount('#app')

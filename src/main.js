import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css";
import router from './router'
import './assets/fontawesome/css/all.min.css';
import { createPinia } from 'pinia'
import 'swiper/css';
 

createApp(App).use(createPinia()).use(router).mount('#app')

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import './registerServiceWorker';
import router from './router';

import App from './App.vue';

import 'element-plus/dist/index.css';
import './assets/main.scss';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App)
  .use(pinia)
  .use(router)
  .use(ElementPlus)
  .mount('#app');

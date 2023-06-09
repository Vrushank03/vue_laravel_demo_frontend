import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import router from './router';
const app = createApp(App);


app.config.globalProperties.$http = axios;

axios.defaults.headers.common['Authorization'] = `Bearer `+window.localStorage.getItem('token');

app.use(router).mount('#app');
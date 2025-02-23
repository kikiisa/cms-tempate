import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import routes from "./router";
import '../node_modules/flowbite-vue/dist/index.css'
const app = createApp(App);
app.use(routes);
app.mount('#app');

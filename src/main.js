import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from 'vant';
import 'vant/lib/index.css';

// axios --start
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios --end  

axios.defaults.withCredentials = true;

// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router)  
app.use(VueAxios, axios)
app.use(Vant)
app.mount('#app')

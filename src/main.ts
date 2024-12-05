import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "../src/routes/route";
import VueApexCharts from "vue3-apexcharts";
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from "vue-sweetalert2";
import {createPinia} from "pinia";
const app = createApp(App);
app.use(createPinia());
app.use(VueApexCharts);
app.use(VueSweetalert2);
app.use(routes);
app.mount("#app");

// createApp(App).mount('#app');

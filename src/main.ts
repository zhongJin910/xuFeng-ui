import { createApp } from "vue";
import App from "./App.vue";
import Xufeng from "../lib/index";

console.log(Xufeng, 'Xufeng');


import "../lib/style.css";

createApp(App).use(Xufeng).mount("#app");

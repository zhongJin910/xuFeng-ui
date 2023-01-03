import { createApp } from "vue";
import App from "./App.vue";
import xfDesign from "@xf-design/xu-feng";

console.log(xfDesign,'xfDesign');

import "@xf-design/xu-feng/lib/style.css";

createApp(App).use(xfDesign).mount("#app");

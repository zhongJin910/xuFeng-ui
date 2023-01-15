import { createApp } from "vue";
import App from "./App.vue";
import Xufeng from "xufeng-ui";

console.log(Xufeng, 'Xufeng');


import "xufeng-ui/lib/style.css";

createApp(App).use(Xufeng).mount("#app");

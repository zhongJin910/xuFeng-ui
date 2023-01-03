import type { App } from "vue";

import Button from "./src/index.vue";
console.log(Button,'Button.name');

Button.install = (app: App) => app.component(Button.name, Button);
export default Button;

import type { App } from "vue";

import Button from "./src/index"

Button.install = (app: App) => app.component(Button.name, Button);
export default Button;

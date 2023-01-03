import type { App } from "vue";

import Tab from "./src/index.vue";
console.log(Tab,'Tab.name');

Tab.install = (app: App) => app.component(Tab.name, Tab);
export default Tab;

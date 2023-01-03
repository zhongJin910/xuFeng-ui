import type { App } from "vue";
import components from "./components";
import "./theme/index.css";
export * from "./components";

const install = (app: App) => {
  components.forEach((e) => app.use(e as unknown as { install: () => any }));
};

export default { install };

import { h, render, ref } from "vue";
import NotifysEl from "./src/index.vue";

type Props = {
  type?: "default" | "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  position?: "top" | "bottom";
  distance?: number
};
const div = document.createElement("div");
div.setAttribute("class", "qzd-notifys");
document.body.appendChild(div);



// 定时器
let timer = ref<any>(null);
let isNode = ref<boolean>(true);
const Notify = (props: Props): void => {
  render(null, div);
  const {
    type = "default",
    message,
    position = "bottom",
    distance,
    duration = 3000,
  }: Props = props;
  if (isNode.value) {
    isNode.value = false;
    setTimeout(() => (isNode.value = true), duration);
    const vNode = h(NotifysEl, {
      type,
      message,
      duration,
      position,
      distance,
    });
    render(vNode, div);
    timer && clearTimeout(timer.value);
    if (duration) {
      timer.value = setTimeout(() => {
        render(null, div);
      }, duration + 500);
    }
  }

};
// Notify.close = () => Notify({ message: "" }, true);

// 不要删除，以后可能会加类型
// Notifys.sussess = (message: string, duration?: number) => {
//   Notifys({ type: 'success', message, duration })
// }
// Notifys.error = (message: string, duration?: number) => {
//   Notifys({ type: 'error', message, duration })
// }
// Notifys.warning = (message: string, duration?: number) => {
//   Notifys({ type: 'warning', message, duration })
// }
// Notifys.info = (message: string, duration?: number) => {
//   Notifys({ type: 'info', message, duration })
// }
export default Notify

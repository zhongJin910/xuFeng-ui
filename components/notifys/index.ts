import { h, render, ref } from "vue";
import NotifysEl from "./src/index.vue";

type Props = {
  type?: "default" | "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  zIndex?: number;
  switchBut?: boolean;
  position?: "top" | "bottom";
  btnText?: string;
  callback?: Function;
  distance?: number;
  transition?: boolean;
};
const div = document.createElement("div");
div.setAttribute("class", "qzd-notifys");
document.body.appendChild(div);

console.log('NotifysEl');


// 定时器
let timer = ref<any>(null);
let isNode = ref<boolean>(true);
const Notifys = (props: Props, isclose = false): void => {
  console.log('Notify');

  render(null, div);
  if (isclose) {
    render(null, div);
    isNode.value = true;
  } else {
    const {
      type = "default",
      message,
      zIndex = 2003,
      switchBut = false,
      btnText = "切换行业",
      position = "bottom",
      callback,
      distance,
      duration = 3000,
      transition = true,
    }: Props = props;
    if (isNode.value) {
      isNode.value = false;
      setTimeout(() => (isNode.value = true), duration);
      const vNode = h(NotifysEl, {
        type,
        message,
        zIndex,
        duration,
        switchBut,
        btnText,
        position,
        transition,
        callback,
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
const Notify = () => Notifys
export default Notify

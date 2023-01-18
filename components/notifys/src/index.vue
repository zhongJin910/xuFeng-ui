<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
// import type {PropType} from 'vue'
interface Props {
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
}
const { message, duration, position, transition, distance } = defineProps<Props>()

const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
  if (duration)
    setTimeout(() => (isShow.value = false), duration);
});


</script>

<template>
  <Teleport to="body">
    <Transition :name="transition && !distance ? `notifys_${position}` : ''">
      <div class="notifys_message" :class="`notifys_${position}`" v-show="isShow"
        :style="{ [`${position}`]: distance + 'px' }">
        <span class="text double-line-ellipsis">{{ message }}</span>
      </div>
    </Transition>
  </Teleport>>
</template>

<style scoped>
.notifys_top-enter-from,
.notifys_top-leave-to {
  transform: translateY(-78px);
  opacity: 0;
}

.notifys_bottom-enter-from,
.notifys_bottom-leave-to {
  transform: translateY(78px);
  opacity: 0;
}

.notifys_top-enter-active,
.notifys_bottom-enter-active {
  transition: all 0.8s;
}

.notifys_top-leave-active,
.notifys_bottom-leave-active {
  transition: all 0.5s;
}

.notifys_top-enter-to,
.notifys_bottom-enter-to,
.notifys_top-leave-from,
.notifys_bottom-leave-from {
  opacity: 1;
}

.notifys_message {
  width: calc(100vw - 48px);
  position: fixed;
  left: 24px;
  line-height: 50px;
  padding: 16px 16px 18px;
  background: #ffffff;
  border: 1px solid rgba(174, 207, 255, 1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notifys_message i {
  margin-right: 4px;
  vertical-align: middle;
}

.notifys_message .text {
  font-size: 28px;
  color: #63656a;
  line-height: 36px;
  font-weight: 400;
  vertical-align: middle;
}

.notifys_message .but {
  width: 144px;
  height: 56px;
  background: #3981f4;
  border-radius: 8px;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  line-height: 58px;
  font-weight: 400;
  flex-shrink: 0;
  margin-left: 24px;
}

.notifys_bottom {
  bottom: 78px;
}

.notifys_top {
  top: 78px;
}
</style>

<script lang="ts" setup name="Button">
import { defineProps, computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  type: {
    type: String as PropType<string>,
    default: "default", // primary / success / warning / danger / info / text
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const classAll = computed(() => [
  "rb-button",
  `rb-button_type__${props.type}`,
  props.disabled ? "rb-button_disabled" : "",
]);
</script>

<template>
  <button :class="[classAll]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
@import "./index.css";
</style>

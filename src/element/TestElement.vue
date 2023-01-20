<script setup lang="ts">
import { nextTick } from 'vue'
import { Button, Notifys } from 'xufeng'
const handleNotifysFn = () => {
  Notifys({ message: 'nihao', duration: 0 })
}

nextTick(() => {
  console.log(document.createElement('div'));

})

</script>
<template>
  <div>
    <Button @click="handleNotifysFn">你好</Button>
  </div>
</template>

<style scoped>

</style>

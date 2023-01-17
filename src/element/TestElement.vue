<script setup lang="ts">
import { Button, Notifys } from 'xufeng-ui'
import { nextTick } from 'vue'
const init = () => {
  console.log('init');

  Notifys({ message: 'nihao' })
}
nextTick(() => init())


</script>
<template>
  <div>
    <Button>你好</Button>
  </div>
</template>

<style scoped>

</style>

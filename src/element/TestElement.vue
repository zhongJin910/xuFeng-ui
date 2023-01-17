<script setup lang="ts">
import { Button, Notifys } from 'xufeng'
import { nextTick } from 'vue'
const init = () => {
  console.log('init');
  setTimeout(Notifys({ message: 'nihao' }), 10000)
  // Notifys({ message: 'nihao' })
}
// nextTick(() => init())


</script>
<template>
  <div>
    <Button>你好</Button>
  </div>
</template>

<style scoped>

</style>

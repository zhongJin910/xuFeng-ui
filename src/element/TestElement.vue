<script setup lang="ts">
import { Button, Notifys } from 'xufeng'
const handleNotifysFn = () => {
  Notifys({ message: 'nihao', duration: 0 })
}


</script>
<template>
  <div>
    <Button @click="handleNotifysFn">你好</Button>
  </div>
</template>

<style scoped>

</style>

<template>
  <div class="not-found">
    <h2 class="text">NOT FOUND!</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.not-found {
  .text {
    text-align: center;
  }
}
</style>

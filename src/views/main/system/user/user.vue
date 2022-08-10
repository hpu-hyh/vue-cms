<template>
  <div class="user">
    <div class="search">
      <HyForm :formItems="formItems" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  components: {
    HyForm
  },
  name: 'user',
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        type: 'input',
        label: '创建的时间',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        type: 'datepicker',
        label: '喜欢的运动',
        rules: [],
        placeholder: '请输入用户名'
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<!-- <style scoped>
</style> -->

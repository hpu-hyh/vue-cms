<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const LoginAction = (isKeepPassword: boolean) => {
      // console.log('正在登陆')
      formRef.value?.validate((valid) => {
        if (valid) {
          // console.log(valid)
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 进行本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }

          // 进行验证登录
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      LoginAction,
      formRef
    }
  }
})
</script>
<style lang="less" scoped>
sss {
  color: #000;
}
</style>

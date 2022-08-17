<!-- eslint-disable prettier/prettier -->
<template>
  <div class="nav-header">
    <i class="fold-menu" :class="isFold ? ' el-icon-s-fold' : ' el-icon-s-unfold'" @click="handleFoldClick"></i>
    <div class="content">
      <div>
        <HyBreadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <userInfo></userInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { userStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    userInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    //面包屑
    const store = userStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currtentPath = route.path
      return pathMapBreadcrumbs(userMenus, currtentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

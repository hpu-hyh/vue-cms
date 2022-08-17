<template>
  <div class="user">
    <div class="search">
      <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { userStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'

export default defineComponent({
  components: {
    PageSearch
  },
  name: 'user',
  setup() {
    const store = userStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: './users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    return {
      searchFormConfig,
      userList
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: rgb(10, 96, 189);
}

.handle-btns {
  text-align: right;
  padding: 0 50px 50px 0;
}
</style>

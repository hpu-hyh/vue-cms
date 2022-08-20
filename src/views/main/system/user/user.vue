<!-- eslint-disable prettier/prettier -->
<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <div class="content">
      <HyTable :listData="userList" :propList="propList" :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn">
        <template #status="scope">
          <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <!-- <template #createAt="scope">
          <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
        </template> -->
      </HyTable>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { userStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    PageSearch,
    HyTable
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

    const propList = [
      // { prop: 'name', label: '用户名', minWidth: '100' },
      // { prop: 'realname', label: '真实姓名', minWidth: '100' },
      // { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      // { prop: 'enable', label: '状态', minWidth: '100' },
      // { prop: 'createAt', label: '创建时间', minWidth: '250' },
      // { prop: 'updateAt', label: '更新时间', minWidth: '250' }
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      { prop: 'realname', label: '真实姓名', minWidth: '100', slotName: 'realname' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100', slotName: 'cellphone' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' }
    ]
    const showIndexColumn = true
    const showSelectColumn = true

    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn
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

.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

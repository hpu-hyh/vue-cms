<!-- eslint-disable prettier/prettier -->
<template>
  <div class="hy-table">
    <el-table :data="listData" border style="width: 100%">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array as PropType<any[]>,
      required: true
    },
    propList: {
      type: Array as PropType<any[]>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    setup() {
      const selectionChange = (value: any) => {
        console.log(value)
      }
      return {
        selectionChange
      }
    }
  }
})
</script>
<!-- <style scoped lang="less">
</style> -->

import 'element-plus/lib/theme-chalk/base.css'
import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus'
const components = [
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElLink,
  ElAside,
  ElContainer,
  ElMain,
  ElHeader,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane
]
export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}

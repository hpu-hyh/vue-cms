type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any
  placeholder?: any
  options?: any[]
  otherOptions?: any
}
export interface IForm {
  // title?: string
  formItems: IFormItem[]
  labelWidth?: string
  itemLayout: any
  colLayout: any
}

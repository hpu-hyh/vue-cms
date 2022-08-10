type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: string
  label: string
  rules?: any
  placeholder: any
}

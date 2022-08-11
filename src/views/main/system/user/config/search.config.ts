import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      rules: []
    },
    {
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: []
    },
    {
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码',
      rules: []
    },
    {
      // field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}

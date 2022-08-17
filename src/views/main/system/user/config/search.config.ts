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
    { field: 'id', type: 'input', label: '用户名', placeholder: '请输入用户名', rules: [] },
    { field: 'name', type: 'input', label: '真实姓名', placeholder: '请输入真实姓名', rules: [] },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码',
      rules: []
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'baskerball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createAt',
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

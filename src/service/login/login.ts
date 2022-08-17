import hyRequest from '../index'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '../typed'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  userMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + '/menu',
    showLoading: false
  })
}

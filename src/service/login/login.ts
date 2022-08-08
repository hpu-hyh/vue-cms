import hyRequest from '../index'
import { IAccount, ILoginResult, IDataType } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

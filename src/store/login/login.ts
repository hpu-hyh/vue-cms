import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload, commit)
      const loginResult = await accountLoginRequest(payload)
      // @ts-igaore
      // console.log(loginResult.id)
      console.log(loginResult.data.id)
      console.log(loginResult)
      // const { id, token } = loginResult.data
      // commit('changeToken', token)
    }
  }
}

export default loginModule

import { createStore, Store, useStore as userVuexStore } from 'vuex'

import login from './login/login'

import { IRootState, IStoreType } from './type'

import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function userStore(): Store<IStoreType> {
  return userVuexStore()
}
export default store

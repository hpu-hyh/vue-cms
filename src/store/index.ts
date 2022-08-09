import { createStore, Store, useStore as userVuexStore } from 'vuex'

import login from './login/login'

import { IRootState, IStoreType } from './type'

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
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function userStore(): Store<IStoreType> {
  return userVuexStore()
}
export default store

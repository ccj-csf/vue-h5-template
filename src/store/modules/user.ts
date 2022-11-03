import { defineStore } from 'pinia'
import { store } from '@/store'

interface UserState {
  userInfo: Store.UserInfo
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: {
      username: '',
      age: 0,
    },
  }),
  getters: {
    getName(): number {
      return 3
    },
  },
  actions: {
    resetState() {},
  },
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}

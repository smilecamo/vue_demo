import { defineStore,acceptHMRUpdate } from "pinia";
import { useStorage } from '@vueuse/core'
export const useDemoStore = defineStore({
  id: "mainStore",
  state: () => ({
    name: 'zhangsan',
    number:0
  }),
  // getter
  getters:{
    doubleNumber:(state) => state.number * 2 +1000,
    doubleNumbers:(state) => {
      return (id:number) => state.number + id
    }
  },
  actions: {
    changeName(name:string){
      this.name =name
    }
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDemoStore, import.meta.hot))
}
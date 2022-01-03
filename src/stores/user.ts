import { acceptHMRUpdate, defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  let currentName = ref('')

  /**
   * Changes the current name of the user.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    currentName.value = name
  }

  return {
    setNewName,
    currentName
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

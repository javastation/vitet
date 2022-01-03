<template lang="">
  <HelloWorld :msg="msg" />
  <footer class="footer">
    <input type="text" v-model="name" />
    <button @click="store.setNewName(name)">set user</button>
  </footer>
</template>
<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  const route = useRoute()
  const name = $ref('')
  const store = useUserStore()
  const { currentName } = $(storeToRefs(store))
  const msg = computed((v) => {
    return `Hello ${
      currentName ? currentName : 'user' + Math.random().toFixed(6).slice(-6)
    }`
  })
  onMounted(() => {
    console.log(`Current path is ${route.path}`)
  })
</script>
<style>
  .footer {
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
</style>

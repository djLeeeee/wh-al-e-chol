<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="inputID" label="ID" :dense="dense" />
      <q-input v-model="inputPW" label="PW" :dense="dense" type="password" />
      <q-btn outline color="primary" label="Login" />
    </div>
  </div>
</template>

<style>
</style>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  setup () {
    return {
      inputID: ref(''),
      inputPW: ref(''),
      dense: ref(false)
    }
  }
}
</script>

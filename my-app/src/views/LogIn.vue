<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="inputID" label="ID" :dense="dense" />
      <q-input v-model="inputPW" label="PW" :dense="dense" type="password" />
      <div :dense="dense" class="row justify-between">
        <q-btn flat color="primary" label="ID/PW 찾기" />
        <q-btn color="secondary" label="회원가입" router-link to="/signin" />
        <q-btn color="primary" label="로그인" />
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { ref } from 'vue'

export default {
  name: 'LogIn',
  setup () {
    return {
      inputID: ref(''),
      inputPW: ref(''),
      dense: ref(false)
    }
  }
}
</script>

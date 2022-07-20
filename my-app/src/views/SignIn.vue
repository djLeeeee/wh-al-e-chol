<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="state.inputID" label="ID" :dense="state.dense" />
      <q-input v-model="state.inputPW" label="PW" :dense="state.dense" type="password" />
      <q-input v-model="state.inputPWConfirm" label="PW Confirm" :dense="state.dense" type="password" />
      <q-btn outline color="primary" label="Sign In" @click="signin(state.inputPW, state.inputPWConfirm)"/>
      <q-btn outline color="deep-orange" label="Back" router-link to="/login" />
    </div>
  </div>
</template>

<style>
</style>

<script>
import { reactive } from 'vue'

export default {
  name: 'SignIn',
  setup () {
    const state = reactive({
      inputID: '',
      inputPW: '',
      inputPWConfirm: '',
      dense: false,
    })

    const signin = (target, confirm) => {
      if (target !== confirm) {
        alert("비밀번호와 비밀번호 확인이 다릅니다")
      } else {
        alert("회원 가입 성공")
      }
    }

    return {
      state,
      signin,
    }
  },
}
</script>

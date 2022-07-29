<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="state.inputID" label="ID" :dense="state.dense">
        <template v-slot:append>
          <q-btn dense color="primary" @click="duplicateCheck(state.inputID)">중복 확인</q-btn>
        </template>
      </q-input>
      <q-input v-model="state.inputPW" label="PW" :dense="state.dense" type="password" />
      <q-input v-model="state.inputPWConfirm" label="PW Confirm" :dense="state.dense" type="password" />
      <q-input v-model="state.inputName" label="이름" :dense="state.dense" />
      <q-input v-model="state.inputKiosk" label="키오스크 번호" :dense="state.dense" />
      <q-input v-model="state.inputPhone" label="휴대폰" :dense="state.dense" />
      <q-input v-model="state.inputEmail" label="이메일" :dense="state.dense" />
      <q-btn color="primary" label="회원 가입" @click="signin(state)"/>
      <q-btn flat color="deep-orange" label="취소" router-link to="/login" />
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
      inputName: '',
      inputKiosk: '',
      inputPhone: '',
      inputEmail: '',
      dense: false,
    })

    const duplicateCheck = (target) => {
      if (!target) {
        alert("입력값이 없습니다.")
      } else {

        // 아이디 중복 확인 필요
        console.log(target)

      }
    }
    
    const signin = (state) => {
      if (state.inputPW !== state.inputPWConfirm) {
        alert("비밀번호와 비밀번호 확인이 다릅니다")
      } else {

        // 회원 가입 제출 필요
        console.log(state)

        alert("회원 가입 성공")
      }
    }

    return {
      state,
      duplicateCheck,
      signin,
    }
  },
}
</script>

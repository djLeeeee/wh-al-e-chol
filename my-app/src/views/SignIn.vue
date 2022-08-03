<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="state.Member_ID" label="ID" >
        <template v-slot:append>
          <q-btn dense color="primary" @click="duplicateCheck(state.Member_ID)">중복 확인</q-btn>
        </template>
      </q-input>
      <q-input v-model="state.Password" label="PW" type="password" />
      <q-input v-model="state.PasswordConfirm" label="PW Confirm" type="password" />
      <q-input v-model="state.Name" label="이름" />
      <q-input v-model="state.Kiosk_ID" label="키오스크 번호"  />
      <q-input v-model="state.Phone" label="휴대폰" />
      <q-input v-model="state.Email" label="이메일" />
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
      Member_ID: '',
      Password: '',
      PasswordConfirm: '',
      Name: '',
      Kiosk_ID: '',
      Phone: '',
      Email: '',
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

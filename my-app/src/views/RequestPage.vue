<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input v-model="state.text" filled autogrow/>
      <q-btn outline color="primary" label="Send" @click="sendRequest(state.text)" />
    </div>
  </div>
</template>

<style>
</style>

<script>
import { reactive } from 'vue'

export default {
  name: 'RequestPage',
  setup () {
    const state = reactive({
      text: '',
    })
    const sendRequest = (input) => {
      if (!input) {
        alert('입력값이 없습니다!')
      }
      state.text = ''
    }
    return {
      state,
      sendRequest
    }
  }
}
</script>
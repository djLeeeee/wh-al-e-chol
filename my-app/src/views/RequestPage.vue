<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input v-model="state.text" filled autogrow/>
      <q-btn outline color="primary" label="Send" @click="sendRequest(state.text)">
        <q-popup-proxy v-model="state.isInputed">
          <q-banner>
            <template v-slot:avatar>
              <q-icon name="edit_off" color="deep-orange" />
            </template>
            요청란을 채워주세요.
          </q-banner>
        </q-popup-proxy>
      </q-btn>
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
      isInputed: true
    })
    const sendRequest = (input) => {
      if (!input) {
        state.isInputed = false
        return
      }
      state.isInputed = true
      state.text = ''
    }
    return {
      state,
      sendRequest
    }
  }
}
</script>
<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-input
      v-model="text"
      filled
      autogrow
    />
    <q-btn outline color="primary" label="Send" @click="sendRequest(text)" />
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'RequestPage',
  setup () {
    const text = ''
    const sendRequest = (input) => {
      console.log(input)
    }

    return {
      text,
      sendRequest
    }
  }
}
</script>
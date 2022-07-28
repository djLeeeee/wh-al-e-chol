<template>
  <transition name="modal">
    <div class="modal-container">
      <slot />
      <a @click="$emit('close-modal'), hideModal()" class="modal-close-button">
        <i class="fa-solid fa-xmark close-mark"></i>
      </a>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalView',
  }

</script>

<style>

</style>
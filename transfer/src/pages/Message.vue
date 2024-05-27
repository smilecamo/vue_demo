<template>
  <div>
    <button
      @click="
        Message.success({
          message: 'this is success',
        })
      "
    >
      SUCCESS
    </button>
    <button
      @click="
        Message.warining({
          message: 'this is warining',
        })
      "
    >
      WARINING
    </button>
    <button
      @click="
        Message({
          type: 'message',
          message: 'this is message',
        })
      "
    >
      MESSAGE
    </button>
    <button
      @click="
        Message({
          type: 'error',
          message: 'this is error',
        })
      "
    >
      ERROR
    </button>
  </div>
</template>

<script setup>
import Message from "../../modules/ui/Message";
</script>

<style lang="scss" scoped>
button {
  @apply rounded-md border-solid border-2 border-indigo-600 p-1 m-1;
}
</style>

<template>
  <div class="py-2">
    <label class="block mb-2">Email</label>
    <input
      class=" plc-text-xl py-4 px-3 rounded w-full border-2 border-gray-100 "
      type="email" placeholder="Entry your email"
      v-model="input"
      @change="handleChange"
      autocomplete
    />
    <p class=" py-2 text-xs text-red-500 ">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputEmail',

  setup(_, { emit }) {
    const input = ref('')
    const errorMessage = ref('')
    
    const handleChange = () => {
      const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const isEmail = pattern.test(input.value)

      if(!input.value) {
        errorMessage.value = 'Field email tidak boleh kosong'
      } else {
        if(!isEmail) {
          errorMessage.value = 'Mohon masukkan email'
        } else {
          errorMessage.value = ''
        }
      }

      emit('input', input.value)
    }

    const resetInput = () => {
      input.value = ''
    }

    return {
      input,
      errorMessage,
      handleChange,
      resetInput,
    }
  },
})
</script>

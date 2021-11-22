<template>
  <div class="py-2">
    <label class="block mb-2">Fullname</label>
    <input
      class=" plc-text-xl py-4 px-3 rounded w-full border-2 border-gray-100 "
      type="text"
      placeholder="Entry your email"
      v-model="input"
      @change="handleChange"
      autocomplete
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputEmail',

  setup(_, { emit }) {
    const input = ref('')
    
    const handleChange = () => {
      emit('input', input.value)
    }

    const resetInput = () => {
      input.value = ''
    }

    return {
      input,
      handleChange,
      resetInput,
    }
  },
})
</script>

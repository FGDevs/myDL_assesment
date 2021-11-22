<template>
  <div class="py-2">
    <label class="block mb-2">Title</label>
    <input
      class="plc-text py-4 px-3 rounded w-full border-2 border-gray-100 "
      type="text"
      placeholder="Enter your Article Title"
      v-model="input"
      @change="handleChange"
      autocomplete
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputTitle',

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

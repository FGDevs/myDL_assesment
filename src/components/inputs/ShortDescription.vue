<template>
  <div class="py-2">
    <label class="block mb-2">Short Description</label>
    <textarea
      class="plc-text py-4 px-3 h-28 rounded w-full border-2 border-gray-100 "
      placeholder="Enter your Article Short Description"
      v-model="input"
      @change="handleChange"
      autocomplete
    >
    </textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputShortDescription',

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

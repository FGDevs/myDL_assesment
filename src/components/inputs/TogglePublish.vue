<template>
  <div class="py-2 flex items-center justify-between">
    <p>Publish</p>
    <label class="cursor-pointer">
      <input class="hidden" type="checkbox" v-model="input" @change="handleChange" />
      <div class="relative">
        <span id="toggle" class="bg-gray-500 block w-9 h-3 bg-opacity-60 rounded-xl transition duration-200"></span>
        <span id="toggle" class="bg-gray-500 absolute -top-1 block w-5 h-5 rounded-full transition duration-200 transform"></span>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputTogglePublish',
  setup(_, { emit }) {
    const input = ref<boolean>(false)

    const handleChange = () => {
      const buttons = document.querySelectorAll('#toggle')

      if(input.value) {
        for (let i = 0; i < buttons.length; i++) {
          document.querySelectorAll('#toggle')[i]?.classList.add('bg-blue-500', 'translate-x-4')
        }
      } else {
        for (let i = 0; i < buttons.length; i++) {
          document.querySelectorAll('#toggle')[i]?.classList.remove('bg-blue-500', 'translate-x-4')
        }
      }

      emit('input', input.value)
    }

    const resetInput = () => {
      input.value = false
    }

    return {
      input,
      resetInput,
      handleChange,
    }
  },
})
</script>

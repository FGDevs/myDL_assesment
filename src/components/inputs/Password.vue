<template>
  <div class="relative py-2">
    <label class="block mb-2">Password</label>
    <input
      id="ele-input-password"
      class=" plc-text-xl py-4 px-3 rounded w-full border-2 border-gray-100 "
      type="password" placeholder="Entry your email"
      v-model="input"
      @change="handleChange"
      autocomplete
    />
    <i class="absolute pt-1 top-14 right-4 cursor-pointer" v-show="!isShowPassword" @click="handleTogglePassword">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-40" viewBox="0 0 21 21" fill="currentColor">
        <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
      </svg>
    </i>
    <i class="absolute pt-1 top-14 right-4 cursor-pointer" v-show="isShowPassword" @click="handleTogglePassword">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-40" viewBox="0 0 21 21" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
      </svg>
    </i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputPassword',

  setup(_, { emit }) {
    const isShowPassword = ref(false)
    const input = ref('')

    const handleChange = () => {
      emit('input', input.value)
    }

    const handleTogglePassword = () => {
      const inputField = document.getElementById('ele-input-password')
      const type = inputField?.getAttribute('type')
      isShowPassword.value = !isShowPassword.value
      switch (type) {
        case 'password':
          inputField?.setAttribute('type', 'text')
          break;
      
        default:
          inputField?.setAttribute('type', 'password')
          break;
      }
    }

    const resetInput = () => {
      input.value = ''
    }

    return {
      input,
      isShowPassword,
      handleChange,
      handleTogglePassword,
      resetInput,
    }
  },
})
</script>

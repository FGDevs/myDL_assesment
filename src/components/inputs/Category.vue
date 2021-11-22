<template>
  <div class="relative py-2">
    <p class="mb-2">Thumbnail</p>
    <label>
      <select
        class="block rounded overflow-hidden border-2 border-gray-100 text-gray-600 w-full px-3 py-2"
        @change="handleChange"
        v-model="input"
      >
        <option value="" hidden selected disabled> Select Category </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        > {{ category.title }} </option>
      </select>
      <i class="absolute right-1 top-11 h-8 w-8 rounded-md flex items-center justify-center bg-white">
        <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0457749 9.30739C0.0153751 9.36579 0.000174999 9.42939 0.000174999 9.49299C0.000174999 9.57299 0.0241747 9.65219 0.0713749 9.72059L3.67138 14.9206C3.74618 15.0286 3.86898 15.093 4.00017 15.093C4.13138 15.093 4.25418 15.0286 4.32898 14.9206L7.92898 9.72059C8.01338 9.59859 8.02338 9.43899 7.95458 9.30739C7.88538 9.17539 7.74898 9.09299 7.60018 9.09299L0.400175 9.09299C0.251375 9.09299 0.114975 9.17539 0.0457749 9.30739Z" fill="#6C757D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.95423 6.02135C7.98462 5.96295 7.99983 5.89935 7.99983 5.83575C7.99983 5.75575 7.97583 5.67655 7.92863 5.60815L4.32862 0.408148C4.25382 0.300148 4.13102 0.235748 3.99983 0.235748C3.86862 0.235748 3.74582 0.300148 3.67102 0.408148L0.0710247 5.60815C-0.0133753 5.73015 -0.0233753 5.88975 0.0454247 6.02135C0.114625 6.15335 0.251025 6.23575 0.399825 6.23575L7.59982 6.23575C7.74862 6.23575 7.88503 6.15335 7.95423 6.02135Z" fill="#6C757D"/>
          </svg>
      </i>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions, ref } from '@nuxtjs/composition-api'
import { ICategory } from '~/src/interfaces/Category'

export default defineComponent({
  name: 'InputSelectCategory',

  props: {
    categories: {
      type: Array,
      required: true,
    } as PropOptions<ICategory[]>
  },

  setup(_, { emit }) {
    const input = ref<string>('')

    const handleChange = () => {
      emit('input', input.value)
    }

    return {
      input,
      handleChange,
    }
  },
})
</script>

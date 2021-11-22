<template>
  <div class="py-2">
    <p class="mb-2">Thumbnail</p>
    <label class="block rounded overflow-hidden border-2 border-gray-100 ">
      <input type="file" class="hidden" @change="handleChangeFile">
      <div class="flex items-center cursor-pointer">
        <span class="block px-4 py-3 bg-gray-200 text-gray-500">Choose File</span>
        <span class="text-gray-500 pl-8">{{ file? file.name : 'No File Choosen'}}</span>
        <!-- <span class="text-gray-500 pl-8">No File Choosen</span> -->
        <!-- {{ image? image.name : '' }} -->
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputThumbnail',

  setup(_, { emit }) {
    const file = ref<File | undefined>()
    let image;

    const handleChangeFile = (e: Event) => {
      file.value = (<HTMLInputElement>e.target)?.files?.[0] 
      // console.log(file.value?.name)
      emit('input', file.value)
    }

    return {
      file,
      image,
      handleChangeFile,
    }
  },
})
</script>

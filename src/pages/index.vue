<template>
  <main>
    <h1 class="text-xl">Welcom to DigiLearn!</h1>
    <div v-for="content in contents" :key="content.id">
      <img :src="content.image" alt="" />
      {{ content.title }}
      {{ content.short_description }}
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, useFetch, useContext, ref, useAsync } from '@nuxtjs/composition-api'
import { IContent, IContentResponse } from 'interfaces/Article'

export default defineComponent({
  name: 'HomePage',
  setup() {
    let contents = ref<IContent[]>([])

    const { $axios } = useContext()
    useFetch(async () => {
      const { data } = await $axios.get<IContentResponse>('article')
      contents.value = data.content
    })
    return { contents }
  },
})
</script>

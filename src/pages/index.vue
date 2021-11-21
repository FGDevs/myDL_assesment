<template>
  <main class="py-12">
    <section class="container mx-auto mb-8 md:mt-12 md:py-12">
      <TheHero />
    </section>
    <section class="container mx-auto p-4 md:px-0">
      <h1 class="font-bold text-4xl text-center mb-12 md:text-5xl md:mb-16">Article</h1>
      <div class="flex flex-wrap">
        <nuxt-link
          :to="`/article/${content.id}`"
          class=" block w-full px-0 py-4 sm:w-1/2 sm:px-3 lg:w-1/4"
          v-for="content in contents"
          :key="content.id"
        >
          <div class="h-52">
            <nuxt-img class="w-full h-full object-cover" :src="content.image" :alt="content.title" />
          </div>
          <div class="py-4">
            <p class="text-xl font-medium mb-2">{{ content.title }}</p>
            <p class="font-light ">{{ content.short_description }}</p>
          </div>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useFetch, useContext, ref } from '@nuxtjs/composition-api'
import { IContent, IContentResponse } from 'interfaces/Article'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheHero: (() => import('components/TheHero.vue'))
  },
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

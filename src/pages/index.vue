<template>
  <main>
    <section class="container relative mx-auto h-96  mb-8 sm:h-auto sm:pb-0 sm:py-12">
      <TheHero />
    </section>
    <section class="container mx-auto p-4 md:px-0">
      <h1 class="font-bold text-4xl text-center mb-12 md:text-5xl md:mb-16">Article</h1>
      <div class="flex flex-wrap justify-center mx-auto">
        <nuxt-link
          v-for="content in contents"
          :key="content.id"
          :to="`/article/${content.title}`"
          class="block w-full px-0 py-4 md:w-60 md:px-3 lg:w-80"
        >
          <CardArticle :content="content" />
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
    TheHero: (() => import('components/TheHero.vue')),
    CardArticle: (() => import('components/cards/Article.vue'))
  },
  setup() {
    let contents = ref<IContent[]>([])

    const { $axios } = useContext()
    useFetch(async () => {
      const { data } = await $axios.get<IContentResponse>('article?size=3&page=1')
      contents.value = data.content
    })
    return { contents }
  },
})
</script>

<template>
  <main>
    <div class="flex flex-wrap justify-center mx-auto">
      <a
        v-for="content in contents"
        :key="content.id"
        :href="`/article/${content.id}`"
        class=" block w-full px-0 py-4 md:w-80"
      >
        <CardArticle :content="content" />
      </a>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useFetch, ref } from '@nuxtjs/composition-api'
import { IContent, IContentResponse } from 'interfaces/Article'


export default defineComponent({
  name: 'PageIndexArticle',

  components: {
    CardArticle: (() => import('components/cards/Article.vue'))
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

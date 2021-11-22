<template>
  <main>
    <div class="container flex flex-wrap mx-auto p-4 sm:px-0 lg:px-32 ">
      <a
        v-for="content in contents"
        :key="content.id"
        :href="`/article/${content.title}`"
        class="block w-full px-0 py-4 sm:w-1/2 md:w-1/3 sm:px-3 lg:w-1/3 "
      >
        <CardArticle :content="content" />
      </a>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useFetch, useMeta, ref } from '@nuxtjs/composition-api'
import { IContent, IContentResponse } from 'interfaces/Article'


export default defineComponent({
  name: 'PageIndexArticle',

  head: {},

  components: {
    CardArticle: (() => import('components/cards/Article.vue'))
  },

  setup() {
    useMeta({
      title: 'Article'
    })
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

<template>
  <main>
    <article class="max-w-2xl px-4 pt-12 pb-14 mx-auto md:px-12">
      <h1 class="text-2xl font-medium mb-6 md:text-4xl md:mb-10">
        {{ content.title }}
      </h1>
      <h2 class="text-lg font-light mb-6 md:text-2xl md:mb-10">
        {{ content.short_description }}
      </h2>
      <div class="mb-6 md:mb-10">
        <nuxt-img :src="content.image" :alt="content.title" />
      </div>
      <div class="text-lg font-light md:text-xl" v-html="content.description"></div>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch, useRoute, useMeta, useRouter } from '@nuxtjs/composition-api'
import { IContent, IContentResponse } from '~/src/interfaces/Article'

export default defineComponent({
  name: 'DetailArticlePage',

  head: {},

  setup() {
    const { $axios } = useContext()
    const route = useRoute()
    const router = useRouter()

    console.log('ROUTE', route.value.fullPath)

    const content = ref<IContent>()

    useFetch(async() => {
      try {
        const { data } = await $axios.get<IContentResponse>(`article?search=${route.value.params.slug.replace(/%20/, ' ')}`)
        if(data.content) {
          content.value = data.content[0]
        }
      } catch(error) {
        console.error((error as Error).message)
        router.push('/404')
      }
    })

    useMeta(() => ({
      title: content.value?.title,
      meta: [
        { hid: 'description', name: 'description', content: `${content.value?.short_description}` },
        { hid: 'og:title', name: 'og:title', content: `${content.value?.title}` },
        { hid: 'og:image', name: 'og:image', content: `${content.value?.image}` },
        { hid: 'og:description', name: 'og:description', content: `${content.value?.short_description}` },
        { hid: 'og:url', name: 'og:url', content: `https://my-digilearn.herokuapp.com/${content.value?.short_description}` },
      ]
    }))

    return { content }
  },
})
</script>

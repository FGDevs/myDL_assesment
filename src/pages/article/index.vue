<template>
  <main>
    <h1>Page Articles</h1>
    {{ posts.title }}
  </main>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const posts = useAsync(() => $axios.get('posts.json'))
    console.log(posts)
    return { posts }
  },
})
</script>

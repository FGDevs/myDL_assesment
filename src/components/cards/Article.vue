<template>
  <div>
    <div class="h-52">
      <nuxt-img
        class="w-full h-full object-cover"
        :src="content.image"
        :alt="content.title"
      />
    </div>
    <div class="py-4">
      <p class="text-xl font-medium mb-2">
        {{ content.title }}
      </p>
      <p class="font-light ">
        {{ content.short_description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IContent } from '~/src/interfaces/Article'

export default defineComponent({
  name: "CardArticle",

  props: {
    content: {
      type: Object as PropType<IContent>,
      required: true
    }
  },
})
</script>

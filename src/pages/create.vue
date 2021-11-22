<template>
  <main>
    <form class="container px-4 pt-12 mx-auto flex flex-wrap mb-12 lg:px-9 lg:mb-0">
      <div class="w-full mb-12 lg:max-w-xl">
        <h1 class="text-lg font-medium mb-8">Create a New Article</h1>
        <FieldTitle v-model="inputFieldTitle" />
        <div class="h-96">
          <client-only>
            <FieldContent v-model="inputFieldContent" />
          </client-only>
        </div>
      </div>
      <div class="w-full lg:w-auto lg:flex-auto lg:ml-6">
        <h1 class="text-lg font-medium mb-8">Publication Detail</h1>
        <FieldShortDescription v-model="inputFieldShortDescription" />
        <FieldThumbnail v-model="inputFieldThumbnail" />
        <FieldCategory v-model="inputFieldCategory" :categories="categories" />
        <FieldTogglePublish v-model="inputFieldTogglePublish" />
        <button
          class="bg-red-500 text-white rounded-md w-full px-4 py-3 mt-8 lg:w-max "
          @click="handleSubmitFormCreate"
        > Publish </button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useMeta, useFetch } from '@nuxtjs/composition-api'
import { ICategory, ICategoryResponse } from '../interfaces/Category'

import FieldTitle from 'components/inputs/Title.vue'
import FieldContent from 'components/inputs/Content.vue'
import FieldShortDescription from 'components/inputs/ShortDescription.vue'
import FieldThumbnail from 'components/inputs/Thumbnail.vue'
import FieldCategory from 'components/inputs/Category.vue'
import FieldTogglePublish from 'components/inputs/TogglePublish.vue'

export default defineComponent({
  name: 'CreatePage',

  components: {
    FieldTitle,
    FieldContent,
    FieldShortDescription,
    FieldThumbnail,
    FieldCategory,
    FieldTogglePublish
  },

  head: {},
  
  setup() {
    useMeta({
      title: 'Create Article'
    })
    
    const { $axios } = useContext()

    const categories = ref<ICategory[]>([])
    const inputFieldTitle = ref<string>('')
    const inputFieldContent = ref<string>('<p>Write your story</p>')
    const inputFieldShortDescription = ref<string>('')
    const inputFieldThumbnail = ref({})
    const inputFieldCategory = ref<ICategory>()
    const inputFieldTogglePublish = ref<boolean>(false)

    useFetch( async () => {
      const { data } = await $axios.get<ICategoryResponse>('article-category')
      categories.value = data.content
    })

    const handleSubmitFormCreate = async (e: Event) => {
      e.preventDefault()

      console.log(
        inputFieldTitle.value,
        inputFieldContent.value,
        inputFieldShortDescription.value,
        inputFieldThumbnail.value,
        inputFieldCategory.value,
        inputFieldTogglePublish.value,
      )

      const response = await $axios.post('article/create', {
        title: inputFieldTitle.value,
        short_description: inputFieldShortDescription.value,
        description: inputFieldContent.value,
        category_id: inputFieldCategory.value,
        is_visible: inputFieldTogglePublish.value,
        image: inputFieldThumbnail.value
      })

      console.log(response)
    }

    return { 
      categories,

      inputFieldTitle,
      inputFieldContent,
      inputFieldShortDescription,
      inputFieldThumbnail,
      inputFieldCategory,
      inputFieldTogglePublish,

      handleSubmitFormCreate
    }
  
  },
})
</script>

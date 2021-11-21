<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomePage',
  components: { 
    TheHeader: (() => import('components/TheHeader.vue')),
    TheFooter: (() => import('components/TheFooter.vue'))
  }
})
</script>

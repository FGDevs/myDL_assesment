<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from '@vue/composition-api'
import TheHeader from 'components/TheHeader.vue'

export default defineComponent({
  name: 'HomePage',
  components: { TheHeader }
})
</script>

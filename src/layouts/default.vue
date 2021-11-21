<template>
  <div>
    <TheHeader />
    <Nuxt class="pt-12 md:pt-24" />
    <TheFooter />
    <ModalLogin />
    <ModalRegister />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomePage',
  components: { 
    TheHeader: (() => import('components/TheHeader.vue')),
    TheFooter: (() => import('components/TheFooter.vue')),
    ModalLogin: (() => import('components/modals/Login.vue')),
    ModalRegister: (() => import('components/modals/Register.vue'))
  }
})
</script>

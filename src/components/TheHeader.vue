<template>
  <header class="fixed top-0 left-0 right-0 bg-white filter drop-shadow-sm">
    <div class="container mx-auto p-4 flex items-center justify-between md:px-0 md:py-5 md:justify-start
    ">
      <nuxt-link
        class="block h-4 md:h-auto"
        to="/"
      >
        <TheLogo />
      </nuxt-link>
      <nav
        id="header-nav"
        class="nav-body bg-white flex inset-0 transition duration-150 ease-in-out fixed flex-col top-12 md:relative md:flex-row md:flex-grow md:top-0 md:ml-4 md:py-0 md:px-2"
      >
        <nuxt-link
          class="text-center text-sm p-4 md:text-md md:py-3 md:px-6"
          v-for="(navigation, index) in navigations"
          :key="index"
          :to="navigation.link"
        >
          {{ navigation.text }}
        </nuxt-link>
        <client-only>
          <div class="text-center text-sm text-customblue-100 p-4 md:py-3 md:px-6 md:flex-grow md:text-right">
            <button  @click="handleToggle">
              Login
            </button>
          </div>
        </client-only>
      </nav>
      <button
        class="block md:hidden"
        @click="isNavVisible? handleHideNav : handleShowNav"
      >
        <svg v-if="!isNavVisible" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#263137"/>
        </svg>
        <svg v-if="isNavVisiible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.99999 5.586L11.95 0.636002L13.364 2.05L8.41399 7L13.364 11.95L11.95 13.364L6.99999 8.414L2.04999 13.364L0.635986 11.95L5.58599 7L0.635986 2.05L2.04999 0.636002L6.99999 5.586Z" fill="#263137"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheHeader',

  components: {
    TheLogo: (() => import('components/TheLogo.vue'))
  },

  data() {
    return {
      isNavVisible: false,
      navigations: [
        { text: 'Home', link: '/' },
        { text: 'Article', link: '/article' },
        { text: 'Create', link: '/create' },
      ]
    }
  },

  methods: {
    handleShowNav() {
      this.$freezeBody()
      const navTag = document.getElementById('header-nav')
      navTag?.classList.add('nav-show')
    },
    
    handleHideNav() {
      this.$unFreezeBody()
      const navTag = document.getElementById('header-nav')
      navTag?.classList.remove('nav-show')
    }
  },
})
</script>

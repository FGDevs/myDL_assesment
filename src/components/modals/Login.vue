<template>
  <base-modal
    modal-name="login"
    @close="handleCloseModal"
  >
    <template v-slot:form>
      <div class="bg-white z-10 rounded-t-lg w-full max-w-xl mx-auto md:rounded-lg ">
        <div class="md:p-20">
          <div class="flex items-center justify-between p-4">
            <h1 class="text-xl font-medium md:text-3xl md:font-bold">Login</h1>
            <i
              class="cursor-pointer"
              @click="handleCloseModal"
            >
              <svg class="md:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99999 5.586L11.95 0.636L13.364 2.05L8.41399 7L13.364 11.95L11.95 13.364L6.99999 8.414L2.04999 13.364L0.635986 11.95L5.58599 7L0.635986 2.05L2.04999 0.636L6.99999 5.586Z" fill="#263137"/>
              </svg>
            </i>
          </div>
          <div class="p-4">
            <p class="mb-6 md:-mt-6 md:mb-12 ">Don't have an account?
              <span
                class="text-red-500 cursor-pointer"
                @click="handleShowRegisterModal"
              >
                Create Account
              </span>
            </p>
            <form>
              <FieldEmail ref="refInputEmail" v-model="inputFieldEmail" />
              <FieldPassword ref="refInputPassword" v-model="inputFieldPassword" />
              <button
                class="block bg-red-500 text-white rounded mt-8 px-3 py-4 w-full tracking-wide md:w-max md:mt-10 "
                @click="handleSubmitFormLogin"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, ref, useAttrs, useContext } from '@nuxtjs/composition-api'

import FieldEmail from 'components/inputs/Email.vue'
import FieldPassword from 'components/inputs/Password.vue'

export default defineComponent({
  name: 'ModalLogin',

  components: {
    BaseModal: (() => import('components/modals/Base.vue')),
    FieldEmail,
    FieldPassword,
  },

  setup() {
    const {
      $axios,
      $unFreezeBody,
      $hideModal,
      $showModal,
      app,
    } = useContext()

    const inputFieldEmail = ref('')
    const inputFieldPassword = ref('')

    const refInputEmail = ref<InstanceType<typeof FieldEmail> | null>()
    const refInputPassword = ref<InstanceType<typeof FieldPassword> | null>()
    
    const handleSubmitFormLogin = async (e: Event) => {
      e.preventDefault()

      const response = await $axios.post('auth/login', {
        email: inputFieldEmail.value,
        password: inputFieldPassword.value
      })

      if(response.data.code === 200) {
        app.$cookies.set('token', response.data.content[0].token)
        alert('Berhasil Masuk!')
        handleCloseModal()
      }
    }

    const closeModal = () => {
      // @ts-ignore
      refInputEmail.value?.resetInput()
      // @ts-ignore
      refInputPassword.value?.resetInput()
      $hideModal('login')
    }

    const handleCloseModal = () => {
      closeModal()
      $unFreezeBody()
    }

    const handleShowRegisterModal = () => {
      $showModal('register')
      closeModal()
    }
    
    return {
      refInputEmail,
      refInputPassword,
      inputFieldEmail,
      inputFieldPassword,
      handleSubmitFormLogin,
      handleCloseModal,
      handleShowRegisterModal,
    }
  },
})
</script>

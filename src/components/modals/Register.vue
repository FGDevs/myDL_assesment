<template>
  <base-modal
    modal-name="register"
    @close="handleCloseModal"
  >
    <template v-slot:form>
      <div class="bg-white z-10 rounded-t-lg w-full max-w-xl mx-auto md:rounded-lg ">
        <div class="md:p-20">
          <div class="flex items-center justify-between p-4">
            <h1 class="text-xl font-medium md:text-3xl md:font-bold">Register</h1>
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
            <p class="mb-6 md:-mt-6 md:mb-12 ">Have an account?
              <span class="text-red-500 cursor-pointer" @click="handleShowModalLogin" >Login</span>
            </p>
            <form>
              <FieldFullname ref="refFieldFullname"  v-model="inputFieldFullname" />
              <FieldEmail ref="refFieldEmail" v-model="inputFieldEmail" />
              <FieldPassword ref="refFieldPassword" v-model="inputFieldPassword" />
              <button
                class="block bg-red-500 text-white rounded mt-8 px-3 py-4 w-full tracking-wide md:w-max md:mt-10 "
                @click="handleSubmitFormRegister"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, useContext, ref } from '@nuxtjs/composition-api'

import FieldFullname from 'components/inputs/Fullname.vue'
import FieldEmail from 'components/inputs/Email.vue'
import FieldPassword from 'components/inputs/Password.vue'

export default defineComponent({
  name: 'ModalRegister',

  components: {
    BaseModal: (() => import('components/modals/Base.vue')),
    FieldFullname,
    FieldEmail,
    FieldPassword,
  },
  
  setup() {
    const {
      $axios,
      $unFreezeBody,
      $hideModal,
      $showModal
    } = useContext()

    const inputFieldFullname = ref<string>('')
    const inputFieldEmail = ref<string>('')
    const inputFieldPassword = ref<string>('')

    const refFieldFullname = ref<InstanceType<typeof FieldFullname> | null>(null)
    const refFieldEmail = ref<InstanceType<typeof FieldEmail> | null>(null)
    const refFieldPassword = ref<InstanceType<typeof FieldPassword> | null>(null)

    const handleSubmitFormRegister = async (e: Event) => {
      e.preventDefault()

      const response = await $axios.post('auth/register', {
        name : inputFieldFullname.value,
        email : inputFieldEmail.value,
        password : inputFieldPassword.value,
        phone : "08213465789"
      })

      if(response.data.code === 200) {
        alert('Berhasil Terdaftar, Silahkan login dengan akun yang baru saja kamu daftarkan')
        closeModal()
        $showModal('login')
      }
    }

    const closeModal = () => {
      // @ts-ignore
      refFieldFullname.value?.resetInput()
      // @ts-ignore
      refFieldEmail.value?.resetInput()
      // @ts-ignore
      refFieldPassword.value?.resetInput()
      $hideModal('register')
    }

    const handleCloseModal = () => {
      closeModal()
      $unFreezeBody()
    }

    const handleShowModalLogin = () => {
      $showModal('login')
      closeModal()
    }

    return {
      inputFieldFullname,
      inputFieldEmail,
      inputFieldPassword,
      refFieldFullname,
      refFieldEmail,
      refFieldPassword,
      handleCloseModal,
      handleShowModalLogin,
      handleSubmitFormRegister,
    }
  }
})
</script>

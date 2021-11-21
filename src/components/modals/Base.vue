<template>
  <div :id="`modal-${modalName}`" class="modal absolute inset-0 flex items-end transition duration-200 md:items-center">
    <div
      class="absolute inset-0 bg-black bg-opacity-60 z-0"
      @click="handleHideModal"
    >
    </div>
    <slot name="form"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseModal',
  props: {
    modalName: {
      type: String,
      required: true
    } as PropOptions<string>
  },

  setup(_, { emit }) {
    const handleHideModal = () => {
      emit('close')
    }

    return {
      handleHideModal
    }
  }
})
</script>

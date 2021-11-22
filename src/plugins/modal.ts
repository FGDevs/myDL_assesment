import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $hideModal: (id: string) => void,
    $showModal: (id: string) => void,
  }
}

const Modal: Plugin = (_, inject) => {
  /**
   * Only set to enable scroll on body
   */
  inject('hideModal', (id: string) => {
    const modal = document.getElementById(`modal-${id}`)
    modal?.classList.remove('modal-show')
  })

  /**
   * Only remove body availability to be scrolled
   */
  inject('showModal', (id: string) => {
    const modal = document.getElementById(`modal-${id}`)
    modal?.classList.add('modal-show')
  })
}

export default Modal

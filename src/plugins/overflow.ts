import { Plugin } from '@nuxt/types'

type freezeFn = () => void

declare module '@nuxt/types' {
  interface Context {
    $freezeBody: freezeFn,
    $unFreezeBody: freezeFn,
    $toggleFreeze: freezeFn,
  }
}

declare module '@nuxtjs/composition-api' {
  interface ComponentRenderProxy {
    $freezeBody: freezeFn,
    $unFreezeBody: freezeFn,
    $toggleFreeze: freezeFn,
  }
}

const Overflow: Plugin = (_, inject) => {
  const bodyTag = document.body
  /**
   * Only set to enable scroll on body
   */
  inject('freezeBody', () => {
    bodyTag.classList.add('body-fixed')
  })

  /**
   * Only remove body availability to be scrolled
   */
  inject('unFreezeBody', () => {
    alert('unfreeze')
    if(bodyTag.classList.contains('body-fixed')) {
      bodyTag.classList.remove('body-fixed')
    }
  })

  /**
   * toggle body scroll 
   */
  inject('toggleFreezeBody', () => {
    bodyTag.classList.toggle('body-fixed')
  })
}

export default Overflow

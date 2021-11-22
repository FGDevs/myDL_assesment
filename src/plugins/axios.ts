import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}

const Api: Plugin = ({ $axios, app }) => {

  $axios.interceptors.request.use((config) => {
    const token = app.$cookies.get('token')
    // console.log(token)
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  $axios.onRequest((config) => {
    // console.log(config)
    // console.log(`Request to ${config.url} called`)
  })

  $axios.onRequestError((error) => {
    // console.log('ERROR request',error)
  })

  $axios.onResponseError((error) => {
    // console.log('ERROR response', error.config)
  })

  $axios.onResponse((response) => {
    // console.log('RESPONSE', response)
  })

  $axios.onError((error) => {
    if(error.response) {
      const code = error.response.status

      switch (code) {
        case 400: 
          // console.log(error.response.statusText)
          break
        case 500:
          // console.log('Something wrong with your code!')
      }
    }
  })
}

export default Api;
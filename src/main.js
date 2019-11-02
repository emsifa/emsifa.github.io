import Vuex from 'vuex'
import DefaultLayout from '~/layouts/Default.vue'
import Container from '~/components/Container.vue'

export default function (Vue, { head, appOptions }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased' }

  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      light: localStorage.getItem('light') == 1
    },
    mutations: {
      light (state, light) {
        state.light = light
        localStorage.setItem("light", light ? 1 : 0)
      }
    },
    actions: {
      setLight({ commit }, light) {
        commit('light', light)
      }
    }
  })

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  // })
}

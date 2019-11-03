import Vuex from 'vuex'
import DefaultLayout from '~/layouts/Default.vue'
import Container from '~/components/Container.vue'

const defaultLight = true
const themeColor = (light) => light ? '#d4dbe1' : '#1f2734'

export default function (Vue, { head, appOptions }, context) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased' }

  head.meta.push({
    name: 'theme-color',
    content: themeColor(defaultLight)
  })

  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: { light: defaultLight },
    mutations: {
      light (state, light) {
        state.light = light
        if (process.isClient) {
          localStorage.setItem("light", light ? 1 : 0)
          const meta = document.querySelector('meta[name="theme-color"]')
          if (meta) {
            meta.setAttribute('content', themeColor(light))
          }
        }
      }
    },
    actions: {
      setLight({ commit }, light) {
        commit('light', light)
      }
    }
  })

  Vue.prototype.$adaptLight = function() {
    const light = (localStorage.getItem('light') || 1) == 1
    appOptions.store.dispatch('setLight', !light)
    this.$nextTick(() => appOptions.store.dispatch('setLight', light))
  }
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  // })
}

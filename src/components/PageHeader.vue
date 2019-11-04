<template>
  <header class="select-none mb-5 shadow-lg" :class="{
    'border-gray-200': light,
    'border-gray-800': !light,
  }">
    <container class="py-5">
      <div class="flex">
        <div class="w-10/12">
          <g-link to="/" class="text-black w-full inline-block">
            <div class="flex">
              <div class="w-auto">
                <img src="/images/logo.svg" class="inline" alt="Logo">
              </div>
              <div class="w-auto ml-3 pt-2">
                <h1 class="text-normal font-semibold" :class="{
                    'text-gray-700': light,
                    'text-gray-300': !light,
                  }">
                  Webnya Muhammad Syifa
                </h1>
                <h2 class="text-sm text-gray-700" :class="{
                    'text-gray-700': light,
                    'text-gray-400': !light,
                  }">
                  {{ subtitle }}
                </h2>
              </div>
            </div>
          </g-link>
        </div>
        <div class="w-2/12 text-right pt-3">
          <button @click="setLight(!light)"
            class="
              p-2
              rounded-full
              bg-transparent
              transition-all
              focus:outline-none
            "
            :title="light ? 'Gelapin' : 'Terangin'"
            :class="{
              'hover:bg-yellow-200': light,
              'hover:bg-gray-800': !light,
            }">
            <img v-if="light" src="/images/sun.svg" alt="Sun" style="width:30px; height: 30px;">
            <img v-if="!light" src="/images/moon.svg" alt="Moon" style="width:30px; height: 30px;">
          </button>
        </div>
      </div>
    </container>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    setLight (light) {
      alert(light)
      this.$light = light
    }
  },
  computed: mapState(['light']),
  methods: mapActions(['setLight'])
}
</script>

<style lang="postcss" scoped>
img {
  height: 60px;
}
</style>

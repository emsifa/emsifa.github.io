<template>
  <article class="
    p-3
    pt-3
    select-none
    border-transparent
    mb-3
    rounded"
    :class="{
      'hover:border-gray-400': light,
      'hover:bg-gray-200': light,
      'hover:border-gray-700': !light,
      'hover:bg-gray-800': !light,
    }">
    <div class="flex">
      <div class="w-auto flex flex-wrap content-center">
        <img src="/images/icons/redis.png" alt="Thumbnail">
      </div>
      <div class="w-auto ml-3">
        <header>
          <h2 class="text-lg leading-tight font-sans">
            <a :href="data.demoUrl" target="_blank" class="text-black font-semibold"
              :class="{
                'text-gray-700': light,
                'text-gray-300': !light,
              }">
              {{ data.title }}
              <br/>
              <small class="text-sm" style="opacity: 0.5">{{ data.description }}</small>
            </a>
          </h2>
        </header>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import { dateFormat, timeago } from '@/helpers/utils'

export default {
  props: ['data'],
  computed: mapState(['light']),
  methods: {
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>

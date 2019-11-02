<template>
  <div class="flex-1 h-full max-w-sm rounded overflow-hidden shadow-lg"  :class="{
    'bg-transparent': light,
    'bg-gray-800': !light,
  }">
    <!-- <img class="w-full" :src="data.thumbnail" :alt="data.title"> -->
    <div class="px-6 py-4">
      <h4 class="font-bold text-xl mb-2" :class="{
        'text-gray-700': light,
        'text-gray-300': !light,
      }">
        <a :href="data.demoUrl" target="_blank">{{ data.title }}</a>
      </h4>
      <p class="text-base" :class="{
        'text-gray-600': light,
        'text-gray-500': !light,
      }">{{ data.description }}</p>

      <div class="mt-4">
        <span v-for="tech in data.techStack" :key="tech" style="font-size: .7rem" class="
          inline-block
          rounded-full
          px-2
          py-1
          font-semibold
          mb-2
          mr-2
        "
        :class="{
          'bg-gray-200': light,
          'text-gray-700': light && activeTags.indexOf(tech) == -1,
          'bg-gray-700': !light,
          'text-gray-300': !light && activeTags.indexOf(tech) == -1,
          'bg-blue-500': activeTags.indexOf(tech) > -1,
          'text-white': activeTags.indexOf(tech) > -1
        }">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { dateFormat, timeago } from '@/helpers'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    activeTags: {
      type: Array,
      default: () => []
    }
  },
  computed: mapState(['light']),
  methods: {
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>

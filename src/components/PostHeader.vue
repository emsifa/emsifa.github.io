<template>
  <header>
    <container>
      <div class="mx-auto pb-5 border-b" :class="{
        'border-gray-200': light,
        'border-gray-800': !light,
        'text-gray-700': light,
        'text-gray-300': !light,
      }">
        <g-image :alt="post.title" :src="post.coverThumb" width="768"/>
        <h1 class="text-3xl sm:text-3xl leading-tight font-sans font-semibold mb-3 mt-5">
          {{ post.title }}
        </h1>
        <p class="text-sm">
          <time :datetime="post.datetime" class="capitalize">{{ formattedPublishDate }}</time>
        </p>
        <p class="text-xs mt-2 uppercase"></p>
        <div class="tags mt-5">
          <g-link v-for="tag in $page.post.tags" :key="tag.id" :to="`${tag.path}/`" class="
            inline-block
            font-sans
            font-semibold
            text-xs
            sm:text-sm
            px-2
            py-1
            mr-2
            mb-2
            rounded
            transition-color
            transition-bg
          "
          :class="{
            'text-gray-700 bg-gray-200 hover:text-white hover:bg-gray-700': light,
            'text-gray-400 bg-gray-800 hover:text-gray-800 hover:bg-gray-300': !light,
          }">
            {{ tag.title }}
          </g-link>
        </div>
      </div>
    </container>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Parallax from "vue-parallaxy"
import { dateFormat } from '@/helpers/utils'

export default {
  props: ['post'],
  components: {
    Parallax
  },
  methods: {
    titleCase(str) {
      return str.replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
    }
  },
  computed: {
    ...mapState(['light']),
    formattedPublishDate() {
      return dateFormat(new Date(this.post.datetime), 'dd MMMM yyyy');
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37
    }
  },
}
</script>

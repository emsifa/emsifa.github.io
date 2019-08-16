<template>
  <header>
    <div class="pt-24">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">
        <g-link to="/" class="text-black w-full inline-block text-center">
          <img src="/images/logo.png" class="inline" alt="Logo" style="height: 100px;">
        </g-link>
      </h1>
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6">
        <h1 class="text-3xl sm:text-5xl leading-tight font-sans font-bold mb-4 text-gray-700">{{ post.title }}</h1>
        <p class="text-gray-700">
          <time :datetime="post.datetime" class="capitalize">{{ formattedPublishDate }}</time>
          &bull;
          <span>{{ post.timeToRead }} min read</span>
        </p>
        <p class="text-gray-700 text-xs mt-2 uppercase"></p>
        <img :src="post.cover" v-if="post.cover" :alt="post.title" class="mt-12">
      </div>
    </div>
  </header>
</template>

<script>
import moment from 'moment'
import Parallax from "vue-parallaxy"

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
    formattedPublishDate() {
      return moment(this.post.datetime).format('DD MMMM YYYY');
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37
    }
  },
}
</script>

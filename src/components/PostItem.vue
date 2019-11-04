<template>
  <article class="
    p-3
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
        <img :src="post.icon" alt="Thumbnail">
      </div>
      <div class="w-auto ml-3">
        <header>
          <time :datetime="post.datetime"
            class="text-xs mb-2 uppercase"
            :class="{
              'text-gray-700': light,
              'text-gray-500': !light,
            }">
            {{ timeago(post.datetime) }} LALU
          </time>
          <h2 class="text-lg leading-tight font-sans">
            <g-link :to="`${post.path}/`" class="text-black font-semibold"
              :class="{
                'text-gray-700': light,
                'text-gray-300': !light,
              }">
              {{ post.title }}
            </g-link>
          </h2>
        </header>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import { dateFormat, timeago } from '@/helpers'

export default {
  props: ['post'],
  computed: {
    ...mapState(['light']),
    formattedPublishDate() {
      return dateFormat(new Date(this.post.datetime), 'dd MMMM, yyyy');
    },
  },
  methods: {
    formatPublishDate(date) {
      return dateFormat(new Date(date), 'dd MMMM, yyyy');
    },
    timeago(date) {
      return timeago(new Date(date));
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>

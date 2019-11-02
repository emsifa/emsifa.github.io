<template>
  <div class="min-h-screen" :class="{light, dark: !light, 'bg-gray-900': !light}">
    <page-header :subtitle="subtitle"/>
    <slot/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import config from '~/.temp/config.js';
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  props: {
    subtitle: {
      type: String
    }
  },
  computed: {
    ...mapState(['light']),
    config () {
      return config
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>

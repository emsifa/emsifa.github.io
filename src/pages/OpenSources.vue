<template>
  <Layout subtitle="Ini halaman open source">
    <main>
      <container class="select-none">
        <h4 class="mb-4 font-semibold text-2xl pl-4" :class="{
          'text-gray-600': light,
          'text-gray-400': !light,
        }">
          Open Source
          <small class="h-auto text-sm text-white py-1 rounded-full float-right px-2 inline-block mt-1" :class="{
            'bg-gray-500': light,
            'bg-gray-800': !light,
          }">Total: {{ $page.openSources.edges.length }}</small>
        </h4>

        <div class="filters p-4 pb-2 border-b border-t mb-4" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          <button v-for="tag in tags" :key="tag" class="
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
            focus:outline-none
          "
          :class="{
            'bg-gray-200 hover:text-white hover:bg-gray-700': light,
            'bg-gray-800 hover:text-gray-800 hover:bg-gray-300': !light,
            'text-gray-600': !isActive(tag) && light,
            'text-gray-400': !isActive(tag) && !light,
            'bg-blue-500': isActive(tag),
            'text-white': isActive(tag)
          }"
          @click="toggleTag(tag)">
            {{ tag }}
          </button>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full md:w-4/12 p-3" v-for="edge in filteredOpenSources" :key="edge.node.id">
            <open-source-card :data="edge.node" :active-tags="activeTags"/>
          </div>
        </div>
      </container>
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import { mapState } from 'vuex'
import config from '~/.temp/config.js'
import PageHeader from '@/components/PageHeader'
import SiteFooter from '@/components/Footer'
import Pagination from '@/components/Pagination'
import OpenSourceCard from '@/components/OpenSourceCard'

export default {
  components: {
    PageHeader,
    Pagination,
    SiteFooter,
    OpenSourceCard
  },
  metaInfo () {
    return {
      title: this.config.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.config.siteName },
        { property: "og:description", content: this.config.siteDescription },
        { property: "og:url", content: this.config.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.config.siteName },
        { name: "twitter:description", content: this.config.siteDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  data () {
    return {
      activeTags: []
    }
  },
  computed: {
    ...mapState(['light']),
    tags () {
      return this.$page.openSources.edges
        .reduce((res, data) => [...res, ...data.node.techStack], [])
        .reduce((res, tag) => {
          if (res.indexOf(tag) === -1) {
            res.push(tag)
          }
          return res
        }, [])
    },
    filteredOpenSources () {
      if (!this.activeTags.length) {
        return this.$page.openSources.edges
      }

      return this.$page.openSources.edges.filter(edge => {
        return edge.node.techStack.filter(tag => this.activeTags.indexOf(tag) > -1).length
      })
    },
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
  methods: {
    isActive (tag) {
      return this.activeTags.indexOf(tag) > -1
    },
    toggleTag (tag) {
      if (this.activeTags.indexOf(tag) > -1) {
        this.activeTags = this.activeTags.filter(t => t !== tag)
      } else {
        this.activeTags.push(tag)
      }
    }
  },
  mounted () {
    this.$adaptLight()
  }
}
</script>

<page-query>
  query Artikel {
    openSources:allOpenSources {
      edges {
        node {
          id
          title
          description
          thumbnail
          demoUrl
          repoUrl
          techStack
        }
      }
    }
  }
</page-query>


<template>
  <Layout subtitle="Ini halaman tag">
    <main>
      <container class="select-none">
        <h4 class="mb-4 font-semibold text-2xl pl-4 pb-4 border-b" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          <span style="opacity:.5">Tag /</span> {{ $page.tag.title }}
        </h4>
        <post-item v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
      </container>
      <pagination :base="`${$page.tag.path}`" :info="$page.tag.belongsTo.pageInfo" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1" />
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import { mapState } from 'vuex'
import config from '~/.temp/config.js'
import PostItem from '@/components/PostItem'
import SiteFooter from '@/components/Footer'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"`
        },

        { property: "og:type", content: 'website' },
        { property: "og:title", content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { property: "og:description", content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { property: "og:url", content: `${this.config.siteUrl}/${this.$page.tag.path}/` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { name: "twitter:description", content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    ...mapState(['light']),
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
  methods: {
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>

<page-query>
query Tag ($path: String!, $page: Int) {
  tag (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            author {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

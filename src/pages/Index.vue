<template>
  <Layout subtitle="Ini halaman utama">
    <main>
      <container class="select-none">
        <h4 class="mb-4 font-semibold text-2xl pl-4 pb-4 border-b" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          Artikel
          <g-link to="/2" class="text-gray-500 hover:text-blue-500 float-right relative text-sm py-4">
            Selengkapnya ⇾
          </g-link>
        </h4>
        <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :light="light" />
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
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PageHeader,
    PostItem,
    Pagination,
    SiteFooter,
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
  computed: {
    ...mapState(['light']),
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  }
}
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 5) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
          tags {
            id
            title
            path
          }
          author {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>


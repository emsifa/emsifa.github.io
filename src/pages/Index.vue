<template>
  <Layout subtitle="Ini halaman utama">
    <main>
      <!-- open source container -->
      <container class="select-none mb-8">
        <h4 class="mb-4 font-semibold text-2xl pl-4 pb-4 border-b" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          Open Source
          <g-link to="/open-sources" class="text-gray-500 hover:text-blue-500 float-right relative text-sm py-3">
            Masih ada {{ $page.openSources.count - $page.featuredOpenSources.edges.length }} lagi ⇾
          </g-link>
        </h4>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/12 p-3" v-for="edge in $page.featuredOpenSources.edges" :key="edge.node.id">
            <open-source-card :data="edge.node" />
          </div>
        </div>
      </container>

      <!-- article container -->
      <container class="select-none mb-8">
        <h4 class="mb-4 font-semibold text-2xl pl-4 pb-4 border-b" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          Artikel
          <g-link to="/artikel/2" class="text-gray-500 hover:text-blue-500 float-right relative text-sm py-3">
            Masih ada {{ $page.articles.count - $page.articles.edges.length }} lagi ⇾
          </g-link>
        </h4>
        <post-item v-for="edge in $page.articles.edges" :key="edge.node.id" :post="edge.node" />
      </container>

      <!-- social media container -->
      <container class="select-none">
        <h4 class="mb-4 font-semibold text-2xl pl-4 pb-4 border-b" :class="{
          'text-gray-600': light,
          'border-gray-200': light,
          'text-gray-400': !light,
          'border-gray-800': !light,
        }">
          Media Sosial
        </h4>
        <div class="">
          <a :href="link.url" rel="noopener" target="_blank" v-for="link in socialMedias" :key="link.label" class="
            inline-block
            rounded
            text-sm
            px-3
            py-2
            font-semibold
            mb-2
            mr-2
            cursor-pointer
          "
          :class="{
            'bg-gray-300 text-gray-700 hover:bg-gray-200': light,
            'bg-gray-700 text-gray-300 hover:bg-gray-800': !light,
          }">
            {{ link.label }}
          </a>
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
import PostItem from '@/components/PostItem'
import OpenSourceCard from '@/components/OpenSourceCard'
import Pagination from '@/components/Pagination'
import socialMedias from '@/data/social-media.json'

export default {
  components: {
    PageHeader,
    PostItem,
    OpenSourceCard,
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
  data () {
    return {
      socialMedias
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
  mounted () {
    this.$adaptLight()
  }
}
</script>

<page-query>
  query Home {
    articles:allPost(limit: 5, order:DESC) {
      count:totalCount
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
          icon
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
    featuredOpenSources:allFeaturedOpenSources(limit: 3) {
      edges {
        node {
          slug
          title
          description
          thumbnail
          demoUrl
          repoUrl
          techStack
        }
      }
    },
    openSources:allOpenSources {
      count:totalCount
    }
  }
</page-query>


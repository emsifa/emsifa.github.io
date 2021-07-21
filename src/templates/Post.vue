<template>
  <Layout subtitle="Ini halaman artikel">
    <main>
      <post-header :post="$page.post" />
      <container>
        <article
          class="pt-5"
          :class="{
            'border-b pb-10 mb-16': !$page.post.author,
            'border-grey-200': light,
            'border-grey-800': !light,
            dark: !light
          }"
        >
          <div
            :class="{ 'pb-10': $page.post.author || $page.post.tags }"
            class="markdown text-lg leading-normal text-gray-700"
            v-html="$page.post.content"
          />
        </article>
      </container>
      <post-footer />
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import { dateFormat } from "@/helpers/utils";
import config from "~/.temp/config.js";
import Alert from "@/components/Alert";
import slugify from "@sindresorhus/slugify";
import SiteFooter from "@/components/Footer";
import PageHeader from "~/components/PageHeader";
import PostHeader from "~/components/PostHeader";
import PostFooter from "~/components/PostFooter";
import { applyMetadata } from "@/helpers/highlighter";

export default {
  components: {
    Alert,
    PageHeader,
    PostHeader,
    PostFooter,
    SiteFooter
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post)
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post)
        },
        { property: "og:url", content: this.postUrl },
        { property: "article:published_time", content: this.$page.post.date },
        {
          property: "og:image",
          content:
            this.config.siteUrl + "/" + this.ogImageUrl.replace(/^\//, "")
        },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post)
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  mounted() {
    import("medium-zoom").then(mediumZoom => {
      this.zoom = mediumZoom.default(".markdown p > img");
    });
    this.$adaptLight();
    this.highlightCodes();
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`;
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    },
    highlightCodes() {
      const metadatas = [...document.querySelectorAll("div.code-metadata")];
      metadatas.forEach(md => {
        const code = md.parentElement.querySelector("pre.shiki");
        if (code) {
          applyMetadata(md, code);
        }
      });
    }
  },
  computed: {
    ...mapState(["light"]),
    config() {
      return config;
    },
    avatar() {
      return `/images/authors/${this.$page.post.author.id}.png`;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postSlug = this.$page.post.slug;

      return postSlug
        ? `${siteUrl}/artikel/${postSlug}/`
        : `${siteUrl}/artikel/${slugify(this.$page.post.title)}/`;
    },
    ogImageUrl() {
      return (
        this.$page.post.cover || `${this.config.siteUrl}/images/bleda-card.png`
      );
    }
  }
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    slug
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    timeToRead
    cover
    coverThumb:cover(width: 768, quality: 90)
    fullscreen
    author {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<template>
  <footer class="text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12">
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0 text-gray-700">
      <p>&copy; 2019</p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link to="/" class="text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color">Home</g-link>
          </li>
          <li class="px-2">
            <a href="/sitemap.xml" class="text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color">Sitemap</a>
          </li>
          <li class="px-2">
            <a href="/feed.xml" class="text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color">RSS Feed</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

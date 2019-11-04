<template>
  <section class="mb-10 py-16" :class="{
    'bg-gray-200': light,
    'bg-gray-800': !light,
    'text-gray-700': light,
    'text-gray-300': !light,
  }">
    <container>
      <div class="flex">
        <div class="w-10/12 mx-auto">
          <h4 class="text-2xl font-semibold mb-4 -mt-4">Suka artikel ini?</h4>
          <p class="mb-8">
            Saya biasanya share artikel-artikel terbaru via
            <strong class="text-gray-700">facebook</strong> atau <strong class="text-gray-700">fanpage foobarology</strong> saya.
            Kalau mau dapat updatenya, di add friend/like/follow aja link-link dibawah ini 😃
          </p>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/em.sifa" class="px-4 py-2 text-lg text-white bg-gray-600 hover:bg-blue-500 rounded">
            Facebook
          </a>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/foobarology" class="ml-3 px-4 py-2 text-lg text-white bg-gray-600 hover:bg-blue-500 rounded">
            Foobarology
          </a>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['light'])
}
</script>

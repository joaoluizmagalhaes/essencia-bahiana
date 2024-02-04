<template>
  <q-page class="">
    <header class="max-w-[1000px] min-h-[400px] mx-auto mt-28 md:mt-44 mb-10">
      <figure>
        <div class="w-full">
          <q-img class="w-full max-h-[500px] object-cover" :src="`/${postStore.imageURL}`" :alt="postStore.post.title" />
        </div>
        <figcaption class="py-8 px-6 md:px-0 flex flex-col">
          <h1 class="text-2xl md:text-5xl font-sans font-bold mb-6">{{ postStore.post.title }}</h1>
          <p class="text-2xl">{{ postStore.post.excerpt }}</p>
          <p class="ml-auto text-kg text-accent">Por Essência Bahiana</p>
        </figcaption>
        <q-separator class="max-w-[1000px] mx-auto mb-6" />
        <q-breadcrumbs class="ml-6 md:ml-0">
          <q-breadcrumbs-el label="Home" to="/"/>
          <q-breadcrumbs-el label="Blog" to="/blog" />
          <q-breadcrumbs-el label="O que fazer" />
          <q-breadcrumbs-el :label="postStore.post.title" />
        </q-breadcrumbs>
      </figure>
    </header>
    <!--<AdComponent dataAdSlot="banner" />
    <q-separator class="max-w-[1000px] mx-auto mb-6" />-->
    <main class="max-w-[1000px] mx-auto flex flex-col md:flex-row mb-6">
      <section v-html="postStore.post.content" class="blog-content w-full md:w-8/12 px-6 md:pl-0" />
      <aside class="w-full md:w-4/12">
        <InstagramFeed />
        <!--<AdComponent dataAdSlot="side" />-->
      </aside>
    </main>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'
// import AdComponent from 'src/components/blog/AdComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import InstagramFeed from 'src/components/InstagramFeed.vue'

const route = useRoute()
const postStore = usePostStore()

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${new Date().getFullYear()} Essencia Bahiana. Todos os direitos reservados.`)


// Função para carregar dados do post
async function loadPostData(postId) {
  await postStore.fetchPost(postId)
}

onMounted(async () => {
  await loadPostData(route.params.id)
})

watch(() => route.params.id, async (newId) => {
  await loadPostData(newId)
})

useMeta(() => {
    return {
      title: postStore.title,
      titleTemplate: title => `Essência BAHIANA | Blog | ${title}`,
      meta: {
        description: { name: 'description', content: postStore.description },
        keywords: { name: 'keywords', content: postStore.keywords },
        'http-equiv': { 'http-equiv': 'Content-Type', content: 'text/html charset=UTF-8' },
        ogTitle: { property: 'og:title', content: `Essência BAHIANA | ${postStore.title}` },
        ogDescription: { property: 'og:description', content: postStore.description },
        ogImage: { property: 'og:image', content: `https://essenciabahiana.com.br/${postStore.imageURL}` },
        twitterTitle: { property: 'twitter:title', content: `Essência BAHIANA | ${postStore.title}` },
        twitterDescription: { property: 'twitter:description', content: postStore.description },
        twitterImage: { property: 'twitter:image', content: `https://essenciabahiana.com.br/${postStore.imageURL}` }
      }
    }
  })
</script>

<script>
import { usePostStore } from 'src/stores/postStore'

export default {
  preFetch({ store, currentRoute }) {
    const postStore = usePostStore(store)
    const postId = currentRoute.params.id
    return postStore.fetchPost(postId)
  }
}
</script>

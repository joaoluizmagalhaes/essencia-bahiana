<template>
  <q-page class="">
    <header class="max-w-[1000px] min-h-[400px] mx-auto mt-28 md:mt-44">
      <figure>
        <div class="w-full ">
          <q-img class="w-full max-h-[500px] object-cover" :src="`/${post.imageURL}`" :alt="post.title" />
        </div>
        <figcaption class="py-8 px-6 md:px-0 flex flex-col">
          <h1 class="text-2xl md:text-5xl font-sans font-bold mb-6">{{ post.title }}</h1>
          <p class="text-2xl">{{ post.excerpt }}</p>
          <p class="ml-auto text-kg text-accent">Por Essência Bahiana</p>
        </figcaption>
        <q-separator class="max-w-[1000px] mx-auto mb-6" />
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" to="/"/>
          <q-breadcrumbs-el label="Blog" to="/blog" />
          <q-breadcrumbs-el label="O que fazer" />
          <q-breadcrumbs-el :label="post.title" />
        </q-breadcrumbs>

      </figure>
    </header>
    <AdComponent dataAdSlot="banner" />
    <q-separator class="max-w-[1000px] mx-auto mb-6" />
    <main class="max-w-[1000px] mx-auto flex flex-col md:flex-row mb-6">
      <section v-html="post.content" class="blog-content w-full md:w-8/12 px-6" />
      <aside class="w-full md:w-4/12">
        <InstagramFeed :id="post.id"/>
        <AdComponent dataAdSlot="side" />
      </aside>
    </main>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>

</template>

<script setup>
import { ref, onServerPrefetch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMeta } from 'quasar'
import AdComponent from 'src/components/blog/AdComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import InstagramFeed from 'src/components/InstagramFeed.vue'
import { db } from 'src/firebase'
import { doc, getDoc } from "@firebase/firestore"

const route = useRoute()

const { id } = route.params
const docRef = doc(db, 'blog', id)
const docSnap = ref(null)

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${new Date().getFullYear()} Essencia Bahiana. Todos os direitos reservados.`)

const post = ref({})
const title = ref('Page')
const description = ref('Essência Bahiana Site')
const keywords = ref('')
const imageURL = ref('hero.jpg')

// Definindo as meta tags com useMeta
useMeta(() => ({
  title: title.value,
  titleTemplate: title => `Essência BAHIANA | Blog | ${title}`,
  meta: {
    description: { name: 'description', content: description.value },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    keywords: { name: 'keywords', content: keywords.value },
    ogTitle: { property: 'og:title', content: `Essência BAHIANA | ${title.value}` },
    ogDescription: { property: 'og:description', content: description.value },
    ogImage: { property: 'og:image', content: `https://essenciabahiana.com.br/${imageURL.value}` },
    twitterTitle: { property: 'twitter:title', content: `Essência BAHIANA | ${title.value}` },
    twitterDescription: { property: 'twitter:description', content: description.value },
    twitterImage: { property: 'twitter:image', content: `https://essenciabahiana.com.br/${imageURL.value}` }
  }
}))

onServerPrefetch(async () => {

  docSnap.value = await getDoc(docRef)

  if (docSnap.value.exists()) {
    post.value = { id: docSnap.value.id, ...docSnap.value.data() }
    title.value = post.value.title
    description.value = post.value.description
    keywords.value = post.value.keywords
    imageURL.value = post.value.imageURL
  }


})

onMounted(async() => {

  if (!docSnap.value) {
    docSnap.value = await getDoc(docRef)

    if (docSnap.value.exists()) {
      post.value = { id: docSnap.value.id, ...docSnap.value.data() }
      title.value = post.value.title
      description.value = post.value.description
      keywords.value = post.value.keywords
      imageURL.value = post.value.imageURL
    }

  }

})
</script>

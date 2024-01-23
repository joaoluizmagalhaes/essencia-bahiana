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
    <AdComponent :dataAdSlot="dataAdSlotBanner" />
    <q-separator class="max-w-[1000px] mx-auto mb-6" />
    <main class="max-w-[1000px] mx-auto flex flex-col md:flex-row mb-6">
      <section v-html="post.content" class="blog-content w-full md:w-8/12 px-6" />
      <aside class="w-full md:w-4/12">
        <InstagramFeed :id="post.id"/>
        <AdComponent :dataAdSlot="dataAdSlotSquare" />
      </aside>
    </main>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AdComponent from 'src/components/blog/AdComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import InstagramFeed from 'src/components/InstagramFeed.vue'

import { db } from 'src/firebase'
import {
  doc, getDoc
} from "@firebase/firestore"

const route = useRoute()

const dataAdSlotSquare = import.meta.env.VITE_GOOGLE_AD_SLOT_SQUARE
const dataAdSlotBanner = import.meta.env.VITE_GOOGLE_AD_SLOT_BANNER

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

const post = ref({})

onMounted(async () => {
  const { category, id } = route.params

  const docRef = doc(db, 'blog', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    post.value = {id: docSnap.id, ...docSnap.data()}
  }

})
</script>

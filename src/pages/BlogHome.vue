<template>
  <q-page class="blog-home">
    <main class="my-28 md:my-48 flex flex-col">
      <BlogHero :dataHero="dataHero"/>

      <AdComponent :dataAdSlot="dataAdSlotBanner" />

      <div class="flex container mx-auto my-20">
        <section class="w-full md:w-9/12">
          <ArticleBody v-for="item in dataHero" :article="item" :key="item.title" />
        </section>
        <aside class="w-full md:w-3/12">
          <AdComponent :dataAdSlot="dataAdSlotSquare" />
        </aside>
      </div>
    </main>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import BlogHero from '../components/blog/BlogHero.vue'
import ArticleBody from '../components/blog/ArticleBody.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import AdComponent from 'src/components/blog/AdComponent.vue'

const dataAdSlotSquare = import.meta.env.VITE_GOOGLE_AD_SLOT_SQUARE
const dataAdSlotBanner = import.meta.env.VITE_GOOGLE_AD_SLOT_BANNER

const dataHero = ref([
  {
    title: 'Praia do Espelho: Um Espetáculo da Natureza',
    imageURL: 'espelho-blog-hero.jpg',
    excerpt: 'Explore águas cristalinas e areias reluzentes. Um verdadeiro paraíso que reflete a serenidade do céu.',
    containerStyle: 'md:pr-6',
    imageStyle: 'md:h-[500px]',
    titleStyle: 'md:text-5xl',
    excerptStyle: 'md:text-lg'
  },
  {
    title: 'Caraíva: Encanto Rústico à Beira-Mar',
    imageURL: 'caraiva-blog-hero.jpg',
    excerpt: 'Descubra a simplicidade encantadora de Caraíva, onde ruas de areia e casas coloridas desenham o cenário.',
    containerStyle: 'md:pb-3',
    imageStyle: 'md:h-[238px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  },
  {
    title: 'Trancoso: Beleza e Charme Histórico',
    imageURL: 'quadrado-blog-hero.jpg',
    excerpt: 'Mergulhe na elegância de Trancoso, um lugar onde praias deslumbrantes encontram um rico patrimônio cultural.',
    containerStyle: 'md:pt-3',
    imageStyle: 'md:h-[238px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  }
])

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>

<template>
  <q-page class="blog-home">
    <main class="my-28 md:mt-48 md:mb-10 flex flex-col">
      <BlogHero :dataHero="dataHero"/>

      <AdComponent :dataAdSlot="dataAdSlotBanner" />

      <div class="flex container mx-auto ">
        <section class="w-full md:w-9/12">
          <ArticleBody v-for="item in dataBody" :article="item" :key="item.title" />
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
    imageStyle: 'md:h-[600px]',
    titleStyle: 'md:text-5xl',
    excerptStyle: 'md:text-lg'
  },
  {
    title: 'Caraíva: Encanto Rústico à Beira-Mar',
    imageURL: 'caraiva-blog-hero.jpg',
    excerpt: 'Descubra a simplicidade encantadora de Caraíva, onde ruas de areia e casas coloridas desenham o cenário.',
    containerStyle: 'md:pb-3',
    imageStyle: 'md:h-[288px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  },
  {
    title: 'Trancoso: Beleza e Charme Histórico',
    imageURL: 'quadrado-blog-hero.jpg',
    excerpt: 'Mergulhe na elegância de Trancoso, um lugar onde praias deslumbrantes encontram um rico patrimônio cultural.',
    containerStyle: 'md:pt-3',
    imageStyle: 'md:h-[288px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  }
])

const dataBody = ref([
  {
    title: "Descubra Arraial d'Ajuda: Um Paraíso Escondido",
    imageURL: 'arraial-blog.jpeg',
    excerpt: "Arraial d'Ajuda: praias deslumbrantes, cultura rica e natureza vibrante."
  },
  {
    title: 'Passarela do Álcool: O Coração Noturno de Porto Seguro',
    imageURL: 'passarela-blog.jpeg',
    excerpt: 'A alma das noites de Porto Seguro, com bares, artesanato e muita vida.'
  },
  {
    title: 'Toa Toa: Diversão e Música à Beira-Mar',
    imageURL: 'toa-toa-blog.jpeg',
    excerpt: 'Diversão garantida com música, dança e gastronomia à beira-mar.',
  },
  {
    title: 'Axé Moi: O Palco da Alegria em Porto Seguro',
    imageURL: 'axe-blog.jpeg',
    excerpt: 'Axé Moi: o epicentro de festas, música ao vivo e cultura bahiana.',
  }
])

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>

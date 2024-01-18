<template>
  <q-page class="blog-home">
    <div class="my-48">
      <BlogHero :dataHero="dataHero"/>
    </div>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import BlogHero from '../components/blog/BlogHero.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

const dataHero = ref([
  {
    title: 'Praia do Espelho: Um Espetáculo da Natureza',
    imageURL: 'espelho-blog-hero.jpg',
    excerpt: 'Explore águas cristalinas e areias reluzentes. Um verdadeiro paraíso que reflete a serenidade do céu.',
    containerStyle: 'pr-6',
    imageStyle: 'h-[500px]',
    titleStyle: 'text-5xl',
    excerptStyle: 'text-lg'
  },
  {
    title: 'Caraíva: Encanto Rústico à Beira-Mar',
    imageURL: 'caraiva-blog-hero.jpg',
    excerpt: 'Descubra a simplicidade encantadora de Caraíva, onde ruas de areia e casas coloridas desenham o cenário.',
    containerStyle: 'pb-3',
    imageStyle: 'h-[238px]',
    titleStyle: 'text-2xl',
    excerptStyle: 'text-md'
  },
  {
    title: 'Trancoso: Beleza e Charme Histórico',
    imageURL: 'quadrado-blog-hero.jpg',
    excerpt: 'Mergulhe na elegância de Trancoso, um lugar onde praias deslumbrantes encontram um rico patrimônio cultural.',
    containerStyle: 'pt-3',
    imageStyle: 'h-[238px]',
    titleStyle: 'text-2xl',
    excerptStyle: 'text-md'
  }
])

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>

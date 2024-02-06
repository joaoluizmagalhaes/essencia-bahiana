<template>
  <q-page class="blog-home">
    <main class="my-28 md:mt-48 md:mb-10 flex flex-col">
      <BlogHero v-if="dataHero.length > 0" :dataHero="dataHero"/>

      <!--<AdComponent dataAdSlot="banner" />-->

      <div class="flex container mx-auto ">
        <section class="w-full md:w-8/12 xl:w-9/12" v-if="dataBody">
          <ArticleBody v-for="item in dataBody" :article="item" :key="item.title" />
        </section>
        <aside class="w-full md:w-4/12 xl:w-3/12">
          <InstagramFeed />
          <!--<AdComponent dataAdSlot="side" />-->
        </aside>
      </div>
    </main>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useMeta } from 'quasar'
import BlogHero from '../components/blog/BlogHero.vue'
import ArticleBody from '../components/blog/ArticleBlogHomeBody.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import InstagramFeed from 'src/components/InstagramFeed.vue'
// import AdComponent from 'src/components/blog/AdComponent.vue'
import { db } from 'src/firebase'
import {
  collection, query, getDocs
} from "@firebase/firestore"

const dataAdSlotSquare = import.meta.env.VITE_GOOGLE_AD_SLOT_SQUARE
const dataAdSlotBanner = import.meta.env.VITE_GOOGLE_AD_SLOT_BANNER


const dataHero = ref([])
const dataBody = ref([])

 useMeta({
    title: 'Essência BAHIANA | Blog',
    meta:
    {
      description: {
        name: 'description',
        content: "Descubra as maravilhas de Porto Seguro e seus arredores conosco. Nosso blog 'Essência Bahiaa' oferece informações detalhadas sobre os melhores pontos turísticos e experiências imperdíveis na região. Planeje sua viagem com facilidade, explore nossa seleção de passeios emocionantes e traslados confortáveis. Sua aventura inesquecível começa aqui!",
      },
      equiv: {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=UTF-8'
      },
      keywords: {
        name: 'keywords',
        content: "Porto Seguro, Pontos turísticos em Porto Seguro, Passeios em Porto Seguro, Traslados em Porto Seguro, Turismo na Bahia, Viagens pela Bahia, Melhores experiências em Porto Seguro, Roteiros de viagem em Porto Seguro, Atrações turísticas na região, Serviço de transporte em Porto Seguro, Roteiro de viagem personalizado, Dicas de viagem para Porto Seguro, Destinos na Bahia, Planejamento de viagem, Experiências memoráveis na Bahia."
      },
      ogTitle: {
        property: 'og:title',
        template () {
          return `Essência BAHIANA | Blog`
        }
      },
      ogDescription: {
        property: 'og:description',
        template () {
          return "Descubra as maravilhas de Porto Seguro e seus arredores conosco. Nosso blog 'Essência Bahiaa' oferece informações detalhadas sobre os melhores pontos turísticos e experiências imperdíveis na região. Planeje sua viagem com facilidade, explore nossa seleção de passeios emocionantes e traslados confortáveis. Sua aventura inesquecível começa aqui!"
        }
      },
      ogImage: {
        property: 'og:image',
        template() {
          return  `https://essenciabahiana.com.br/hero.webp`
        }
      },
      twitterTitle: {
        property: 'twitter:title',
        template () {
          return `Essência BAHIANA | Blog`
        }
      },
      twitterDescription: {
        property: 'twitter:description',
        template () {
          return "Descubra as maravilhas de Porto Seguro e seus arredores conosco. Nosso blog 'Essência Bahiaa' oferece informações detalhadas sobre os melhores pontos turísticos e experiências imperdíveis na região. Planeje sua viagem com facilidade, explore nossa seleção de passeios emocionantes e traslados confortáveis. Sua aventura inesquecível começa aqui!"
        }
      },
      twitterImage: {
        property: 'twitter:image',
        template() {
          return  `https://essenciabahiana.com.br/hero.webp`
        }
      }
    }
  })


onBeforeMount( () => {

  dataHero.value = []
  dataBody.value = []

  const blogRef = collection(db, 'blog')

  const q = query(blogRef)

  getDocs(q)
  .then(response => {
    response.forEach(doc => {

      if(doc.data().featured) {
        dataHero.value.push({id : doc.id, ...doc.data()})
      } else {
        dataBody.value.push({id : doc.id, ...doc.data()})
      }
    })
  })
})

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>

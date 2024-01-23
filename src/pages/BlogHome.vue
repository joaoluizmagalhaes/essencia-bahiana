<template>
  <q-page class="blog-home">
    <main class="my-28 md:mt-48 md:mb-10 flex flex-col">
      <BlogHero v-if="dataHero.length > 0" :dataHero="dataHero"/>

      <AdComponent :dataAdSlot="dataAdSlotBanner" />

      <div class="flex container mx-auto ">
        <section class="w-full md:w-9/12" v-if="dataBody">
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
import { ref, onMounted } from 'vue'
import BlogHero from '../components/blog/BlogHero.vue'
import ArticleBody from '../components/blog/ArticleBlogHomeBody.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import AdComponent from 'src/components/blog/AdComponent.vue'
import { db } from 'src/firebase'
import {
  collection, query, getDocs
} from "@firebase/firestore"

const dataAdSlotSquare = import.meta.env.VITE_GOOGLE_AD_SLOT_SQUARE
const dataAdSlotBanner = import.meta.env.VITE_GOOGLE_AD_SLOT_BANNER


const dataHero = ref([])
const dataBody = ref([])

const dataHeroOld = ref([
  {
    id:'espelho',
    title: 'Praia do Espelho: Um Espetáculo da Natureza',
    imageURL: 'espelho-blog-hero.jpg',
    excerpt: 'Explore águas cristalinas e areias reluzentes. Um verdadeiro paraíso que reflete a serenidade do céu.',
    content: "<p>A Praia do Espelho, localizada na costa sul da Bahia, é uma verdadeira joia escondida, um recanto de beleza natural que atrai visitantes de todos os cantos em busca de suas águas cristalinas e areias reluzentes. Conhecida por ser um dos destinos mais cobiçados do Brasil, a Praia do Espelho é o cenário perfeito para quem deseja relaxar e se conectar com a natureza, oferecendo uma experiência inigualável de tranquilidade e beleza.</p><img src='url_to_image_1.jpg' alt='Praia do Espelho' style='float:left;width:50%;margin-right:20px;'><p>Ao planejar sua viagem para este paraíso, considere a importância de um passeio bem organizado e um serviço de traslado confiável. Afinal, o conforto e a segurança durante o trajeto são essenciais para aproveitar ao máximo o que a Praia do Espelho tem a oferecer. Com opções variadas, você pode escolher o passeio que mais se adequa ao seu estilo, seja para explorar as belezas naturais de forma tranquila ou para adicionar um toque de aventura às suas férias.</p><img src='url_to_image_2.jpg' alt='Atividades na Praia do Espelho' style='float:right;width:50%;margin-left:20px;'><p>Ao chegar à Praia do Espelho, prepare-se para ser recebido por um cenário de tirar o fôlego. As águas de tons azul-turquesa formam uma paleta de cores fascinante com o céu, enquanto a areia branca e reluzente completa o quadro, refletindo a luz do sol de forma mágica. Não é à toa que a praia recebeu esse nome: a natureza aqui parece se contemplar, criando um espetáculo de reflexos que encanta todos os visitantes.</p><p>Para os amantes de atividades ao ar livre, a Praia do Espelho oferece uma variedade de opções. Desde passeios de barco, mergulho entre os recifes de corais, até caminhadas ecológicas pelas trilhas que revelam a flora e fauna locais, há sempre uma forma especial de se conectar com este paraíso. Além disso, a região conta com uma excelente infraestrutura de restaurantes e acomodações, garantindo que sua estadia seja tão confortável quanto memorável.</p><p>Por fim, ao escolher a Praia do Espelho como seu próximo destino, lembre-se de que um passeio bem planejado é a chave para uma experiência inesquecível. Com serviços especializados em passeios e traslados, você poderá desfrutar de cada momento sem preocupações, mergulhando de cabeça na tranquilidade e na beleza que só este lugar pode oferecer. Reserve já o seu passeio e prepare-se para viver momentos únicos na Praia do Espelho, um verdadeiro espetáculo da natureza.</p>",
    containerStyle: 'md:pr-6',
    imageStyle: ' md:h-[600px]',
    titleStyle: 'md:text-5xl',
    excerptStyle: 'md:text-lg'
  },
  {
    id: 'caraiva',
    title: 'Caraíva: Encanto Rústico à Beira-Mar',
    imageURL: 'caraiva-blog-hero.jpg',
    excerpt: 'Descubra a simplicidade encantadora de Caraíva, onde ruas de areia e casas coloridas desenham o cenário.',
    content: "<p>Caraíva é um verdadeiro refúgio para quem busca paz e contato com a natureza. Localizada no sul da Bahia, esta vila encantadora é rodeada por um cenário exuberante, onde o rio encontra o mar, e as ruas de areia se alinham com casas coloridas e árvores frondosas. A singularidade de Caraíva oferece uma experiência autêntica para os viajantes, tornando-a um destino imperdível para quem deseja se desligar do mundo moderno e mergulhar em uma atmosfera tranquila e acolhedora.</p><img src='url_to_image_caraiva_1.jpg' alt='Vista de Caraíva' style='float:left;width:50%;margin-right:20px;'><p>Organizar sua viagem para Caraíva significa planejar uma fuga memorável do cotidiano. Aqui, a oferta de passeios é variada e promete encantar todos os tipos de aventureiros. Desde passeios de barco pelo rio Caraíva, explorando manguezais e apreciando o pôr do sol, até caminhadas pelas praias deslumbrantes e trilhas que revelam a rica biodiversidade da região. Com serviços especializados em traslados e passeios, os visitantes podem explorar o melhor de Caraíva com conforto e segurança.</p><img src='url_to_image_caraiva_2.jpg' alt='Passeio em Caraíva' style='float:right;width:50%;margin-left:20px;'><p>A vida noturna de Caraíva é tão cativante quanto seus dias ensolarados. As ruas se iluminam com a energia vibrante dos restaurantes, bares e festas que exibem a rica cultura e a hospitalidade local. A culinária é um espetáculo à parte, com pratos que trazem o sabor fresco do mar e ingredientes locais, prometendo uma verdadeira jornada gastronômica para os visitantes.</p><p>O serviço de traslado em Caraíva é pensado para garantir que sua viagem seja tão relaxante quanto o destino em si. Os visitantes podem contar com um transporte confortável e seguro, facilitando o acesso às diversas belezas que a vila tem a oferecer. Seja para chegar à vila ou para se deslocar durante sua estadia, os serviços de traslado proporcionam a comodidade e a eficiência necessárias para uma viagem sem preocupações.</p><p>Reservar uma viagem para Caraíva é garantir um lugar no paraíso. As belezas naturais, a cultura vibrante e a tranquilidade do lugar criam o cenário perfeito para uma escapada inesquecível. Não perca a chance de conhecer um dos destinos mais encantadores do Brasil. Entre em contato agora mesmo e planeje sua aventura em Caraíva, onde cada momento promete ser uma página de um livro de memórias preciosas.</p>",
    containerStyle: 'md:pb-3',
    imageStyle: 'md:h-[288px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  },
  {
    id: 'trancoso',
    title: 'Trancoso: Beleza e Charme Histórico',
    imageURL: 'quadrado-blog-hero.jpg',
    excerpt: 'Mergulhe na elegância de Trancoso, um lugar onde praias deslumbrantes encontram um rico patrimônio cultural.',
    containerStyle: 'md:pt-3',
    imageStyle: 'md:h-[288px]',
    titleStyle: 'md:text-2xl',
    excerptStyle: 'md:text-md'
  }
])

const dataBodyOld = ref([
  {
    id:'arraial-dajuda',
    title: "Descubra Arraial d'Ajuda: Um Paraíso Escondido",
    imageURL: 'arraial-blog.jpeg',
    excerpt: "Arraial d'Ajuda: praias deslumbrantes, cultura rica e natureza vibrante.",
    content: ''
  },
  {
    id: 'passarela-do-alcool',
    title: 'Passarela do Álcool: O Coração Noturno de Porto Seguro',
    imageURL: 'passarela-blog.jpeg',
    excerpt: 'A alma das noites de Porto Seguro, com bares, artesanato e muita vida.',
    content: ''
  },
  {
    id: 'toa-toa',
    title: 'Toa Toa: Diversão e Música à Beira-Mar',
    imageURL: 'toa-toa-blog.jpeg',
    excerpt: 'Diversão garantida com música, dança e gastronomia à beira-mar.',
    content: ''
  },
  {
    id: 'axe-moi',
    title: 'Axé Moi: O Palco da Alegria em Porto Seguro',
    imageURL: 'axe-blog.jpeg',
    excerpt: 'Axé Moi: o epicentro de festas, música ao vivo e cultura bahiana.',
    content: ''
  }
])



onMounted( () => {

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

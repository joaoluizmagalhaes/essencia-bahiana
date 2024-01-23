<template>
  <q-page class="">
    <header class="max-w-[1000px] min-h-[400px] mx-auto mt-28 md:mt-44">
      <figure>
        <div class="w-full ">
          <q-img class="w-full max-h-[500px] object-cover" :src="`/${post.imageURL}`" :alt="post.title" />
        </div>
        <figcaption class="py-8 px-6 md:px-0">
          <h1 class="text-2xl md:text-5xl font-sans font-bold mb-6">{{ post.title }}</h1>
          <p class="text-2xl">{{ post.excerpt }}</p>
        </figcaption>
      </figure>
    </header>
    <AdComponent :dataAdSlot="dataAdSlotBanner" />
    <main class="max-w-[1000px] mx-auto flex flex-col md:flex-row mb-6">
      <section v-html="post.content" class="blog-content w-full md:w-9/12 px-6" />
      <aside class="w-full md:w-3/12">
        <InstagramFeed />
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

const route = useRoute()

const dataAdSlotSquare = import.meta.env.VITE_GOOGLE_AD_SLOT_SQUARE
const dataAdSlotBanner = import.meta.env.VITE_GOOGLE_AD_SLOT_BANNER

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

const data = ref([
  {
    id:'espelho',
    title: 'Praia do Espelho: Um Espetáculo da Natureza',
    imageURL: 'espelho-blog-hero.jpg',
    excerpt: 'Explore águas cristalinas e areias reluzentes. Um verdadeiro paraíso que reflete a serenidade do céu.',
    content: "<p>A Praia do Espelho, localizada na costa sul da Bahia, é uma verdadeira joia escondida, um recanto de beleza natural que atrai visitantes de todos os cantos em busca de suas águas cristalinas e areias reluzentes. Conhecida por ser um dos destinos mais cobiçados do Brasil, a Praia do Espelho é o cenário perfeito para quem deseja relaxar e se conectar com a natureza, oferecendo uma experiência inigualável de tranquilidade e beleza.</p><img src='/espelho-1.jpg' alt='Praia do Espelho' style='float:left;width:50%;margin-right:20px;'><p>Ao planejar sua viagem para este paraíso, considere a importância de um passeio bem organizado e um serviço de traslado confiável. Afinal, o conforto e a segurança durante o trajeto são essenciais para aproveitar ao máximo o que a Praia do Espelho tem a oferecer. Com opções variadas, você pode escolher o passeio que mais se adequa ao seu estilo, seja para explorar as belezas naturais de forma tranquila ou para adicionar um toque de aventura às suas férias.</p><img src='/espelho-2.jpg' alt='Atividades na Praia do Espelho' style='float:right;width:50%;margin-left:20px;'><p>Ao chegar à Praia do Espelho, prepare-se para ser recebido por um cenário de tirar o fôlego. As águas de tons azul-turquesa formam uma paleta de cores fascinante com o céu, enquanto a areia branca e reluzente completa o quadro, refletindo a luz do sol de forma mágica. Não é à toa que a praia recebeu esse nome: a natureza aqui parece se contemplar, criando um espetáculo de reflexos que encanta todos os visitantes.</p><p>Para os amantes de atividades ao ar livre, a Praia do Espelho oferece uma variedade de opções. Desde passeios de barco, mergulho entre os recifes de corais, até caminhadas ecológicas pelas trilhas que revelam a flora e fauna locais, há sempre uma forma especial de se conectar com este paraíso. Além disso, a região conta com uma excelente infraestrutura de restaurantes e acomodações, garantindo que sua estadia seja tão confortável quanto memorável.</p><p>Por fim, ao escolher a Praia do Espelho como seu próximo destino, lembre-se de que um passeio bem planejado é a chave para uma experiência inesquecível. Com serviços especializados em passeios e traslados, você poderá desfrutar de cada momento sem preocupações, mergulhando de cabeça na tranquilidade e na beleza que só este lugar pode oferecer. Reserve já o seu passeio e prepare-se para viver momentos únicos na Praia do Espelho, um verdadeiro espetáculo da natureza.</p>",
  },
  {
    id: 'caraiva',
    title: 'Caraíva: Encanto Rústico à Beira-Mar',
    imageURL: 'caraiva-blog-hero.jpg',
    excerpt: 'Descubra a simplicidade encantadora de Caraíva, onde ruas de areia e casas coloridas desenham o cenário.',
    content: "<p>Caraíva é um verdadeiro refúgio para quem busca paz e contato com a natureza. Localizada no sul da Bahia, esta vila encantadora é rodeada por um cenário exuberante, onde o rio encontra o mar, e as ruas de areia se alinham com casas coloridas e árvores frondosas. A singularidade de Caraíva oferece uma experiência autêntica para os viajantes, tornando-a um destino imperdível para quem deseja se desligar do mundo moderno e mergulhar em uma atmosfera tranquila e acolhedora.</p><img src='/caraiva-1.jpg' alt='Vista de Caraíva' style='float:left;width:50%;margin-right:20px;'><p>Organizar sua viagem para Caraíva significa planejar uma fuga memorável do cotidiano. Aqui, a oferta de passeios é variada e promete encantar todos os tipos de aventureiros. Desde passeios de barco pelo rio Caraíva, explorando manguezais e apreciando o pôr do sol, até caminhadas pelas praias deslumbrantes e trilhas que revelam a rica biodiversidade da região. Com serviços especializados em traslados e passeios, os visitantes podem explorar o melhor de Caraíva com conforto e segurança.</p><img src='/caraiva-2.jpg' alt='Passeio em Caraíva' style='float:right;width:50%;margin-left:20px;'><p>A vida noturna de Caraíva é tão cativante quanto seus dias ensolarados. As ruas se iluminam com a energia vibrante dos restaurantes, bares e festas que exibem a rica cultura e a hospitalidade local. A culinária é um espetáculo à parte, com pratos que trazem o sabor fresco do mar e ingredientes locais, prometendo uma verdadeira jornada gastronômica para os visitantes.</p><p>O serviço de traslado em Caraíva é pensado para garantir que sua viagem seja tão relaxante quanto o destino em si. Os visitantes podem contar com um transporte confortável e seguro, facilitando o acesso às diversas belezas que a vila tem a oferecer. Seja para chegar à vila ou para se deslocar durante sua estadia, os serviços de traslado proporcionam a comodidade e a eficiência necessárias para uma viagem sem preocupações.</p><p>Reservar uma viagem para Caraíva é garantir um lugar no paraíso. As belezas naturais, a cultura vibrante e a tranquilidade do lugar criam o cenário perfeito para uma escapada inesquecível. Não perca a chance de conhecer um dos destinos mais encantadores do Brasil. Entre em contato agora mesmo e planeje sua aventura em Caraíva, onde cada momento promete ser uma página de um livro de memórias preciosas.</p>",
  },
  {
    id: 'trancoso',
    title: 'Trancoso: Beleza e Charme Histórico',
    imageURL: 'quadrado-blog-hero.jpg',
    excerpt: 'Mergulhe na elegância de Trancoso, um lugar onde praias deslumbrantes encontram um rico patrimônio cultural.',
    content: "<p>Trancoso é uma verdadeira joia da Costa do Descobrimento, onde a história encontra a beleza natural. Este charmoso distrito de Porto Seguro é famoso por seu Quadrado Histórico, suas casas coloridas e suas praias deslumbrantes. Um passeio por Trancoso é uma viagem no tempo, onde cada esquina revela uma história e cada praia convida ao relaxamento e à contemplação.</p><img src='/trancoso-2.jpg' alt='Quadrado Histórico de Trancoso' style='float:right;width:50%;margin-left:20px;'><p>A oferta de passeios em Trancoso é tão rica quanto suas paisagens. Explore as praias paradisíacas, como a Praia dos Coqueiros e a Praia do Espelho, ou desfrute de um jogo de golfe em um dos campos mais cobiçados da região. Os traslados para Trancoso garantem uma viagem confortável e segura, permitindo que você desfrute de cada momento sem preocupações.</p><img src='/trancoso-.jpg' alt='Praia dos Coqueiros em Trancoso' style='float:left;width:50%;margin-right:20px;'><p>À noite, Trancoso se transforma. O Quadrado, iluminado por lanternas coloridas, oferece uma variedade de restaurantes e bares onde a gastronomia local e a música ao vivo criam uma atmosfera mágica. Desfrute de um jantar sob as estrelas e sinta a verdadeira essência da vida em Trancoso.</p><p>Os serviços de traslado em Trancoso são projetados para oferecer a máxima comodidade. Seja para chegar ao distrito ou para explorar seus arredores, os traslados proporcionam uma experiência de viagem tranquila e agradável, complementando perfeitamente a serenidade do local.</p><p>Viver Trancoso é uma experiência única. A combinação de beleza natural, riqueza cultural e infraestrutura de qualidade faz deste lugar um destino imperdível. Reserve já sua viagem e prepare-se para descobrir o encanto de Trancoso, um lugar onde cada dia é um convite para a aventura e o descanso.</p>",
  },
  {
    id:'arraial-dajuda',
    title: "Descubra Arraial d'Ajuda: Um Paraíso Escondido",
    imageURL: 'arraial-blog.jpeg',
    excerpt: "Arraial d'Ajuda: praias deslumbrantes, cultura rica e natureza vibrante.",
    content: "<p>Arraial d'Ajuda é o destino perfeito para quem busca beleza, cultura e diversão. Com suas praias de águas cristalinas e areia branca, Arraial é o cenário ideal para dias de sol e noites de alegria. Explore a Rua do Mucugê, o coração pulsante do local, onde a arte, a gastronomia e o artesanato se encontram em uma explosão de cores e sabores.</p><img src='/arraial-1.jpg' alt='Rua do Mucugê em Arraial d'Ajuda' style='float:left;width:50%;margin-right:20px;'><p>Os passeios em Arraial d'Ajuda são tão vibrantes quanto o próprio lugar. Mergulhe nas águas claras da Praia do Mucugê ou da Praia de Pitinga, ou aventure-se em passeios de quadriciclo pelas trilhas naturais. Com serviços especializados de traslados, cada jornada em Arraial é sinônimo de conforto e praticidade.</p><img src='/arraial-2.jpg' alt='Praia de Pitinga em Arraial d'Ajuda' style='float:right;width:50%;margin-left:20px;'><p>À noite, Arraial d'Ajuda se ilumina com uma energia contagiante. Desfrute dos bares e restaurantes que oferecem desde pratos típicos da culinária baiana até opções internacionais, tudo acompanhado de música ao vivo e um ambiente acolhedor.</p><p>Os serviços de traslado em Arraial d'Ajuda são cuidadosamente planejados para garantir que você desfrute de cada momento. Desde a chegada até a partida, a comodidade e a segurança são prioridades, permitindo que você se entregue às belezas e às emoções que Arraial reserva.</p><p>Arraial d'Ajuda é um convite aberto à alegria e ao encantamento. Reserve sua viagem e venha desfrutar deste pedaço do paraíso, onde cada dia promete novas descobertas e memórias inesquecíveis.</p>"
  },
  {
    id: 'passarela-do-alcool',
    title: 'Passarela do Álcool: O Coração Noturno de Porto Seguro',
    imageURL: 'passarela-blog.jpeg',
    excerpt: 'A alma das noites de Porto Seguro, com bares, artesanato e muita vida.',
    content: "<p>A Passarela do Álcool, em Porto Seguro, é um verdadeiro ícone da vida noturna baiana. Conhecida oficialmente como Passarela do Descobrimento, este local se transforma ao entardecer, com suas barracas de artesanato, restaurantes e bares vibrantes, atraindo visitantes de todas as partes em busca de diversão e cultura.</p><img src='/passarela-1.jpg' alt='Passarela do Álcool à noite' style='float:left;width:50%;margin-right:20px;'><p>Além da variedade de lojas e barracas de artesanato, a Passarela do Álcool é famosa por seus coquetéis tropicais, especialmente a tradicional caipirinha. À noite, a música ao vivo e os artistas de rua criam uma atmosfera única, ideal para quem quer vivenciar a cultura local em um ambiente animado.</p><img src='/passarela-2.jpg' alt='Barracas na Passarela do Álcool' style='float:right;width:50%;margin-left:20px;'><p>Para quem deseja explorar Porto Seguro além da Passarela do Álcool, há diversas opções de passeios e traslados que levam a outros pontos turísticos da região, como praias e monumentos históricos.</p>"
  },
  {
    id: 'toa-toa',
    title: 'Toa Toa: Diversão e Música à Beira-Mar',
    imageURL: 'toa-toa-blog.jpeg',
    excerpt: 'Diversão garantida com música, dança e gastronomia à beira-mar.',
    content: "<p>Toa Toa é sinônimo de diversão e entretenimento em Porto Seguro. Localizado na famosa Praia de Taperapuan, o complexo Toa Toa oferece aos seus visitantes uma combinação perfeita de música, dança e praias deslumbrantes. Com uma estrutura completa, é o local ideal para quem busca diversão ao sol e uma experiência de praia inesquecível.</p><img src='/toa-toa-1.jpg' alt='Complexo Toa Toa' style='float:left;width:50%;margin-right:20px;'><p>Além da praia, o Toa Toa oferece shows ao vivo, aulas de dança e atividades recreativas, tornando-se um ponto de encontro para turistas e locais. A gastronomia do local também é destaque, com uma variedade de pratos e petiscos que agradam a todos os paladares.</p><img src='/toa-toa-2.jpg' alt='Praia no Toa Toa' style='float:right;width:50%;margin-left:20px;'><p>Para aqueles que querem aproveitar ao máximo a estadia em Porto Seguro, os serviços de traslado para o Toa Toa garantem comodidade e facilitam o acesso a um dos melhores ambientes de praia da região.</p>"
  },
  {
    id: 'axe-moi',
    title: 'Axé Moi: O Palco da Alegria em Porto Seguro',
    imageURL: 'axe-blog.jpeg',
    excerpt: 'Axé Moi: o epicentro de festas, música ao vivo e cultura bahiana.',
    content: "<p>Axé Moi, conhecido como um dos melhores complexos de entretenimento de Porto Seguro, oferece uma experiência vibrante e repleta de energia. Localizado na Praia de Taperapuan, o Axé Moi é famoso por sua extensa programação de shows ao vivo, aulas de dança e eventos que destacam o melhor da cultura baiana, atraindo turistas de todos os cantos em busca de diversão e música de qualidade.</p><img src='/axe-moi-1.jpg' alt='Complexo Axé Moi' style='float:left;width:50%;margin-right:20px;'><p>Com uma infraestrutura impecável, o Axé Moi proporciona conforto e entretenimento na mesma medida. As barracas de praia oferecem deliciosos pratos típicos, enquanto o palco principal é um verdadeiro ponto de encontro para quem deseja dançar e se divertir ao som de artistas renomados.</p><img src='/axe-moi-2.jpg' alt='Show no Axé Moi' style='float:right;width:50%;margin-left:20px;'><p>O serviço de traslado para o Axé Moi garante uma chegada tranquila e segura, permitindo que os visitantes aproveitem cada momento sem preocupações. Seja para curtir um dia ensolarado à beira-mar ou para dançar a noite toda, o Axé Moi é a escolha certa para uma experiência autêntica e inesquecível em Porto Seguro.</p>"
  }
])

const post = ref({})

onMounted( () => {
  const { category, id } = route.params
  post.value = data.value.find( el => el.id === id)
})
</script>

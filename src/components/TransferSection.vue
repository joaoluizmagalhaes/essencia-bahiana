<template>
  <section class="w-full min-h-[500px] bg-primary py-20">
    <div class="container flex flex-col mx-auto">
      <header class="px-6 max-w-[1000px] mb-16 md:mb-28">
        <h1 class="font-sans text-3xl md:text-6xl text-accent font-bold mb-2 md:mb-5">Explore Porto Seguro com Conforto e Segurança</h1>
        <p class="text-secondary text-lg md:text-2xl">Traslados e Passeios Personalizados</p>
      </header>

      <TransferCard v-for="item in data" :image="item.image" :title="item.title" :text="item.text" :customCss="item.customCss" :order="item.order" :alt="item.alt" :key="item.image"/>

      <footer class="flex flex-col w-full max-w-[800px] px-6 md:mx-auto">
        <h2 class="text-accent text-3xl md:text-6xl font-bold mb-6 text-center md:text-left">Pronto para Descobrir Porto Seguro?</h2>
        <p class="text-white text-lg md:text-xl mb-10">Não espere mais para planejar a viagem dos seus sonhos! Clique aqui e faça já a sua cotação de traslados via WhatsApp. Rápido, fácil e seguro – seu Porto Seguro está a apenas uma mensagem de distância!</p>

        <WhatsAppBtn :text="text" />
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TransferCard from './TransferCard.vue'
import WhatsAppBtn from './WhatsAppBtn.vue'

const data = ref([
  {
    image: 'van-1.webp',
    alt: 'Van na praia.',
    title: 'Traslados e Passeios Personalizados',
    text: 'Explore as maravilhas de Porto Seguro com nossos passeios exclusivos e traslados confortáveis. Seu parceiro ideal em turismo, garantindo aventuras inesquecíveis e segurança em cada viagem!',
    customCss: '',
    order: false
  },
  {
    image: 'van-2.webp',
    alt: 'Van na Praia do Espelho',
    title: 'Explore o Coração da Bahia com Estilo! ',
    text: 'Porto Seguro espera por você com suas praias deslumbrantes e história rica. Desfrute de experiências únicas com nossos tours especializados e serviços de traslado de primeira classe, projetados para proporcionar conforto e conveniência em suas aventuras tropicais.',
    customCss: 'md:pl-0 md:pr-20',
    order: true
  },
  {
    image: 'van-3.webp',
    alt: 'turistas felizes dentro da Van',
    title: 'Viva a Magia de Porto Seguro!',
    text: 'Embarque em uma jornada extraordinária pelos encantos naturais e culturais de Porto Seguro. Oferecemos itinerários personalizados e serviços de qualidade para tornar cada momento de sua viagem memorável e cheio de descobertas.',
    customCss: '',
    order: false
  }
])

const text = ref('Faça uma cotação')
</script>

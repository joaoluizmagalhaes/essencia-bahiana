<template>
  <section class="w-full min-h-[500px] bg-primary py-20">
    <div class="container flex flex-col mx-auto">
      <header class="px-6 max-w-[1000px] mb-16 md:mb-28">
        <h1 class="font-sans text-3xl md:text-6xl text-accent font-bold mb-2 md:mb-5">Explore Porto Seguro com Conforto e Segurança</h1>
        <p class="text-secondary text-lg md:text-2xl">Traslados e Passeios Personalizados</p>
      </header>

      <TransferCard v-for="item in data" :image="item.image" :title="item.title" :text="item.text" :customCss="item.customCss" :order="item.order" :alt="item.alt" :key="item.image"/>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TransferCard from './TransferCard.vue'

const data = ref([
  {
    image: 'van-1.png',
    alt: 'Van na praia.',
    title: 'Traslados e Passeios Personalizados',
    text: 'Explore as maravilhas de Porto Seguro com nossos passeios exclusivos e traslados confortáveis. Seu parceiro ideal em turismo, garantindo aventuras inesquecíveis e segurança em cada viagem!',
    customCss: '',
    order: false
  },
  {
    image: 'van-2.png',
    alt: 'Van na Praia do Espelho',
    title: 'Traslados e Passeios Personalizados',
    text: 'Explore as maravilhas de Porto Seguro com nossos passeios exclusivos e traslados confortáveis. Seu parceiro ideal em turismo, garantindo aventuras inesquecíveis e segurança em cada viagem!',
    customCss: 'md:pl-0 md:pr-20',
    order: true
  },
  {
    image: 'van-3.png',
    alt: 'turistas felizes dentro da Van',
    title: 'Traslados e Passeios Personalizados',
    text: 'Explore as maravilhas de Porto Seguro com nossos passeios exclusivos e traslados confortáveis. Seu parceiro ideal em turismo, garantindo aventuras inesquecíveis e segurança em cada viagem!',
    customCss: '',
    order: false
  }
])
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden flex justify-center items-center">
    <div class="absolute top-0 left-0 w-full h-full">
      <q-img :src="image" alt="Praia em Porto Seguro Bahia" class="object-cover object-[85%] md:object-center w-full h-full" />
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-15"></div>
    <div class="absolute top-0 max-w-2xl w-full h-full flex p-5 flex-col py-[200px] justify-center md:justify-start items-center text-center text-white z-10">
      <h1 class="text-5xl md:text-[80px] text-white font-bold mb-6 font-sans leading-3 shadow-primary drop-shadow-lg">{{ firstTitle }} <span class="text-6xl md:text-[120px] leading-normal uppercase">{{ secondTitle }}</span></h1>
      <p class="text-3xl md:text-3xl text-shadow-outline text-white font-open">{{ subtitle }}</p>
      <WhatsAppBtn :text="text" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import WhatsAppBtn from './WhatsAppBtn.vue'

const props = defineProps({
  image: String,
  firstTitle: String,
  secondTitle: String,
  subtitle: String
})

const text = ref('Converse Conosco')

</script>

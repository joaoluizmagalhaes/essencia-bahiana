<template>
  <figure class="flex flex-row max-w-[1000px] px-6 mx-auto mb-20">
    <q-img :src="image"  :alt="alt" :class="`w-full md:w-1/3 ${ order ? 'md:order-2' : '' }`" />
    <figcaption :class="`w-full md:w-2/3 md:px-10 flex flex-col justify-start items-start py-6 ${ customCss }`">
      <h2 class="text-sans font-bold text-secondary text-3xl md:text-4xl mb-6">{{ title }}</h2>
      <p class="text-white text-lg mb-6">{{ text }}</p>
      <WhatsAppBtn :text="btnText" />
    </figcaption>
  </figure>
</template>

<script setup>
import { ref } from 'vue'
import WhatsAppBtn from './WhatsAppBtn.vue'

const btnText = ref('Saiba mais')

const props = defineProps({
  image: String,
  alt: String,
  title: String,
  text: String,
  customCss: String,
  order: Boolean
})

</script>

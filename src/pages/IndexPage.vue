<template>
  <q-page class="flex flex-center w-full">
    <Hero :image="image" :firstTitle="firstTitle" :secondTitle="secondTitle" :subtitle="subtitle"/>
    <SelectionBar />
    <TransferSection />
    <ContactSection />
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '../components/HeroComponent.vue'
import SelectionBar from 'src/components/SelectionBar.vue'
import TransferSection from 'src/components/TransferSection.vue'
import EventsSection from 'src/components/EventsSection.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import ContactSection from 'src/components/ContactSection.vue'

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const subtitle = ref('Descubra a Magia e a Cultura Única da Terra do Descobrimento')
const image = ref('/hero.jpg')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>

<template>
  <q-page class="flex flex-center w-full">
    <Hero :image="image" :firstTitle="firstTitle" :secondTitle="secondTitle" :subtitle="subtitle"/>
    <SelectionBar />

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '../components/HeroComponent.vue'
import SelectionBar from 'src/components/SelectionBar.vue'

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const subtitle = ref('Descubra a Magia e a Cultura Única da Terra do Descobrimento')
const image = ref('/hero.jpg')
</script>

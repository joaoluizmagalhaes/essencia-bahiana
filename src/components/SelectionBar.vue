<template>
  <section class="w-full h-auto md:h-44 bg-primary md:bg-secondary md:bg-accent md:bg-primary flex justify-center">
    <div class="container grid grid-cols-3 md:grid-cols-6">
      <SelectionBarItem v-for="item in items" :bgColor="item.bgColor" :icon="item.icon" :text="item.text" :key="item.text" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SelectionBarItem from './SelectionBarItem.vue'

const items = ref([
  {
    bgColor: 'bg-secondary',
    icon: 'drink.svg',
    text: 'Festas'
  },
  {
    bgColor: 'bg-primary',
    icon: 'bus.svg',
    text: 'Traslados'
  },
  {
    bgColor: 'bg-accent',
    icon: 'boat.svg',
    text: 'Passeios'
  },
  {
    bgColor: 'bg-primary md:bg-secondary',
    icon: 'beach.svg',
    text: 'Praias'
  },
  {
    bgColor: 'bg-accent md:bg-primary',
    icon: 'dive.svg',
    text: 'Mergulhos'
  },
  {
    bgColor: 'bg-secondary md:bg-accent',
    icon: 'food.svg',
    text: 'Gastronomia'
  },
])

</script>

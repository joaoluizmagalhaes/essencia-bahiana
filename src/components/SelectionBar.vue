<template>
  <section class="w-full h-auto md:h-44 bg-white flex justify-center">
    <div class="w-full grid grid-cols-3 md:grid-cols-6">
      <SelectionBarItem v-for="item in items" :bgColor="item.bgColor" :icon="item.icon" :text="item.text" :key="item.icon" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SelectionBarItem from './SelectionBarItem.vue'

const items = ref([])

onMounted(() => {
  items.value = [
    {
      bgColor: 'bg-secondary',
      icon: '/drink.svg',
      text: 'Festas'
    },
    {
      bgColor: 'bg-accent',
      icon: '/bus.svg',
      text: 'Traslados'
    },
    {
      bgColor: 'bg-secondary',
      icon: '/boat.svg',
      text: 'Passeios'
    },
    {
      bgColor: 'bg-accent',
      icon: '/beach.svg',
      text: 'Praias'
    },
    {
      bgColor: 'bg-secondary',
      icon: '/dive.svg',
      text: 'Mergulhos'
    },
    {
      bgColor: 'bg-accent',
      icon: '/food.svg',
      text: 'Gastronomia'
    },
  ]
})



</script>

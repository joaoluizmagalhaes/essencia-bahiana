<template>
  <a rel="sponsored" :href="bookingAdSrc" target="_blank">
    <div class="w-full flex flex-col mb-10 px-6">
      <h2 class="font-sans font-bold text-primary text-2xl  mb-4">{{ addTitle }}</h2>
      <p class="text-base text-secondary mb-6">{{ addText }}</p>
      <!-- START ADVERTISER: Booking.com Brazil from awin.com -->

      <img :src="imgURL" border="0">

      <!-- END ADVERTISER: Booking.com Brazil from awin.com -->
    </div>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bookingAdSrc = ref(null)
const imgURL = ref(null)
const addTitle = ref(null)
const addText = ref(null)

const props = defineProps({
  location: String
})


onMounted(() => {
  bookingAdSrc.value = 'https://www.awin1.com/cread.php?awinmid=18120&awinaffid=1542385&campaign=Enjoy-the-summer&ued=https%3A%2F%2Fbooking.com%2Findex.pt-br.html?%2F'
  imgURL.value = 'https://www.awin1.com/cshow.php?s=2788398&v=18120&q=404159&r=1542385'

  addTitle.value = `Descubra ${props.location}!`
  addText.value = `Aproveite 15% de desconto na sua primeira reserva de 2024 para ${props.location} com a Booking. Explore a beleza e história de ${props.location}. Clique e economize!`
})
// Substitua esta URL pelo link específico do anúncio fornecido pelo Booking.com


</script>









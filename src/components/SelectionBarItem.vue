<template>
  <div :class="`hover:scale-105 hover:shadow-2xl cursor-pointer ease-in-out duration-300 flex flex-col
  justify-center items-center ${bgColor} p-5`">
    <img :src="icon" alt="" class="w-20 h-20">
    <p class="text-white text-lg">{{ text }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  bgColor: String,
  icon: String,
  text: String,
})

</script>

<template>
  <section class="relative w-full h-screen overflow-hidden flex justify-center items-center">
    <div class="absolute top-0 left-0 w-full h-full">
      <q-img :src="image" alt="Praia em Porto Seguro Bahia" class="object-cover object-[85%] md:object-center w-full h-full" />
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-15"></div>
    <div class="absolute top-0 max-w-2xl w-full h-full flex p-5 flex-col py-[200px] justify-center md:justify-start items-center text-center text-white z-10">
      <h1 class="text-5xl md:text-[80px] font-bold mb-6 font-sans leading-3 shadow-primary drop-shadow-lg">{{ firstTitle }}</h1>
      <h1 class="text-6xl md:text-[120px] font-bold mb-6 font-sans leading-tight shadow-primary drop-shadow-lg uppercase">{{ secondTitle }}</h1>
      <p class="text-3xl md:text-3xl text-shadow-outline font-open">{{ subtitle }}</p>
      <q-btn class="text-lg px-5 py-2 rounded bg-white text-primary my-5 mt-auto shadow-2xl" @click="scrollToFeatures">
        <q-avatar size="42px" class="mr-5">
          <q-img src="zap-icon.png" alt="Ícone Whatsapp" />
        </q-avatar>
        Converse Conosco
      </q-btn>

    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  image: String,
  firstTitle: String,
  secondTitle: String,
  subtitle: String
})

</script>

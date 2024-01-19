<template>
  <div class="mx-auto container flex flex-col md:flex-row md:h-[600px]">
    <div class="w-full md:w-7/12 px-6 md:px-0 box-border flex md:h-[600px]">
      <ArticleHero :article="dataHero[0]" />
    </div>
    <div class="w-full md:w-5/12 px-6 md:px-0 mb-10 md:mb-0 box-border md:justify-between flex flex-col  md:h-[unset]">
      <ArticleHero :article="dataHero[1]" />
      <ArticleHero :article="dataHero[2]" />
    </div>
  </div>

</template>

<script setup>
import ArticleHero from './ArticleHero.vue'

const props = defineProps({
  dataHero: {
    title: String,
    imageURL: String,
    excerpt: String,
    containerStyle: String,
    imageStyle: String,
    titleStyle: String,
    excerptStyle: String
  }
});

// Se você quiser desestruturar os props diretamente
const { dataHero } = props;

</script>

<style scopped>
.figure-hover:hover .image-hover{
  transform: scale(1.05);
}
</style>

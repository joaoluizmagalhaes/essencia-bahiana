<template>
  <div class="mx-auto container flex flex-col md:flex-row md:h-[600px]">
    <div class="w-full md:w-7/12 px-6 md:px-0 box-border flex md:h-[600px]">
      <router-link :to="`/blog/o-que-fazer/${dataHero[0].id}`" class="w-full" >
        <ArticleHero :article="dataHero[0]" />
      </router-link>
    </div>
    <div class="w-full md:w-5/12 px-6 md:px-0 mb-10 md:mb-0 box-border md:justify-between flex flex-col  md:h-[unset]">
      <router-link :to="`/blog/o-que-fazer/${dataHero[1].id}`" >
        <ArticleHero :article="dataHero[1]" />
      </router-link>
      <router-link :to="`/blog/o-que-fazer/${dataHero[2].id}`" >
        <ArticleHero :article="dataHero[2]" />
      </router-link>
    </div>
  </div>

</template>

<script setup>
import ArticleHero from './ArticleBlogHomeHero.vue'

const props = defineProps({
  dataHero: {
    id: String,
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

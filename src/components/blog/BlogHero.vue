<template>
  <div class="mx-auto container flex">
    <div class="w-7/12 box-border flex h-[500px]">
      <ArticleHero :article="dataHero[0]" />
    </div>
    <div class="w-5/12 box-border flex flex-col h-[500px]">
      <ArticleHero :article="dataHero[1]" />
      <ArticleHero :article="dataHero[2]" />
    </div>
  </div>

</template>

<script setup>
import ArticleHero from './ArticleHero.vue'

const props = defineProps({
  dataHero: {
    type: Array,
    default: () => ([]), // Define um valor padrão como um array vazio
    validator: (value) => {
      // Valida se cada item do array é um objeto com as propriedades 'title', 'imgURL', e 'excerpt'
      return value.every(item =>
        item.hasOwnProperty('title') && typeof item.title === 'string' &&
        item.hasOwnProperty('imgURL') && typeof item.imgURL === 'string' &&
        item.hasOwnProperty('excerpt') && typeof item.excerpt === 'string'
      );
    }
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

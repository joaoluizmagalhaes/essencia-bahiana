<template>
  <div class="mx-auto container flex flex-col md:flex-row md:h-[600px]" v-if="data.length > 0">
    <div class="w-full md:w-7/12 px-6 md:px-0 box-border flex md:h-[600px]">
      <router-link :to="`/blog/o-que-fazer/${data[0].id}`" class="w-full" >
        <ArticleHero  :article="data[0]" />
      </router-link>
    </div>
    <div class="w-full md:w-5/12 px-6 md:px-0 mb-10 md:mb-0 box-border md:justify-between flex flex-col  md:h-[unset]">
      <router-link :to="`/blog/o-que-fazer/${data[1].id}`" >
        <ArticleHero :article="data[1]" />
      </router-link>
      <router-link :to="`/blog/o-que-fazer/${data[2].id}`" >
        <ArticleHero :article="data[2]" />
      </router-link>
    </div>
  </div>

</template>

<script setup>
import ArticleHero from './ArticleBlogHomeHero.vue'
import { ref, onMounted } from 'vue'

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

const data = ref([])

onMounted(() => {

  data.value = props.dataHero

  data.value[0].containerStyle = 'md:pr-6'
  data.value[0].imageStyle = ' md:h-[600px]'
  data.value[0].titleStyle = 'md:text-5xl'
  data.value[0].excerptStyle = 'md:text-lg'

  data.value[1].containerStyle = 'md:pb-3'
  data.value[1].imageStyle = 'md:h-[288px]'
  data.value[1].titleStyle = 'md:text-2xl'
  data.value[1].excerptStyle = 'md:text-md'


  data.value[2].containerStyle = 'md:pt-3'
  data.value[2].imageStyle = 'md:h-[288px]'
  data.value[2].titleStyle = 'md:text-2xl'
  data.value[2].excerptStyle = 'md:text-md'

})

</script>

<style scopped>
.figure-hover:hover .image-hover{
  transform: scale(1.05);
}
</style>

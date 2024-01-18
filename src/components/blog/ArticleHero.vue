<template>
  <article :class="`w-full ${article.containerStyle}`">
    <figure class="relative figure-hover">
      <div class="relative w-full h-full overflow-hidden">
        <q-img :src="article.imageURL" :class="`w-full object-cover object-center relative z-10 image-hover ease-in-out duration-500 ${article.imageStyle}`" />
      </div>
      <figcaption class="z-20  s absolute bottom-0 p-6">
        <header>
          <h2 :class="`text-white text-shadow-outline font-bold font-sans ${article.titleStyle}`">{{ article.title }}</h2>
          <p :class="`text-white text-shadow-outline ${article.excerptStyle}`">{{ article.excerpt }}</p>
        </header>
      </figcaption>
    </figure>
  </article>
</template>
<script setup>
import { onMounted } from 'vue';


onMounted( ()=> {
  console.log(props)
})

const props = defineProps({
  article: {
    title: String,
    imageURL: String,
    excerpt: String,
    containerStyle: String,
    titleStyle: String,
    excerptStyle: String,
    imageStyle: String,
  }
})

</script>

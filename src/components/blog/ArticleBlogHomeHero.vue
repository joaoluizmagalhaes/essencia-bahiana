<template>
  <article :class="`w-full pb-6 md:pb-0 cursor-pointer ${article.containerStyle}`">
    <figure class="relative figure-hover">
      <div class="relative w-full h-full overflow-hidden">
        <q-img :src="article.imageURL" :class="`relative object-cover object-center relative z-10 image-hover ease-in-out duration-500 ${article.imageStyle}`" :alt="article.title" />
      </div>
      <figcaption class="z-20 md:absolute bottom-0 py-3 md:p-6">
        <header>
          <h2 :class="`text-2xl md:text-shadow-outline font-bold font-sans ${article.titleStyle} md:text-white`">{{ article.title }}</h2>
          <p :class="`text-lg md:text-white md:text-shadow-outline ${article.excerptStyle}`">{{ article.excerpt }}</p>
        </header>
      </figcaption>
    </figure>
  </article>
</template>
<script setup>


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

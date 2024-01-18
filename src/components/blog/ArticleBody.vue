<template>
  <article class="w-full mb-10 cursor-pointer px-6 md:px-0">
    <figure class=" flex">
      <div class="w-full md:w-1/3 mb-5">
        <q-img :src="article.imageURL" class="" />
      </div>
      <figcaption class="w-full md:w-2/3 flex flex-col justify-end md:pl-10 ">
        <header>
          <h2 class="text-2xl md:text-shadow-outline font-bold font-sans">{{ article.title }}</h2>
          <p class="text-lg md:text-shadow-outline">{{ article.excerpt }}</p>
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
  }
})

</script>

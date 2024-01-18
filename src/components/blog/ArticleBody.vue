<template>
  <article class="w-full mb-10 cursor-pointer px-6 md:px-0">
    <figure class=" flex">
      <div class="w-full md:w-1/3 mb-5 md:mb-0">
        <q-img :src="article.imageURL" class="" />
      </div>
      <figcaption class="w-full md:w-2/3 flex flex-col justify-end md:pl-10 ">
        <header>
          <h2 class="text-2xl  font-bold font-sans">{{ article.title }}</h2>
          <p class="text-lg ">{{ article.excerpt }}</p>
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

<template>
  <div ref="adContainer" class="w-full ad-container mx-auto p-6 max-w-[1000px]">
    <h4 class="font-bold text-secondary font-sans text-base">Publicidade:</h4>
    <!-- Ezoic - sidebar_bottom - sidebar_bottom -->
    <div v-if="dataAdSlot === 'side'" id="ezoic-pub-ad-placeholder-103"> </div>
    <!-- End Ezoic - sidebar_bottom - sidebar_bottom -->

    <!-- Ezoic - under_page_title - under_page_title -->
    <div v-if="dataAdSlot === 'banner'" id="ezoic-pub-ad-placeholder-104"> </div>
    <!-- End Ezoic - under_page_title - under_page_title -->

    <!-- <ins class="adsbygoogle container mx-auto flex justify content-center"
         :data-ad-client="dataAdClient"
         :data-ad-slot="dataAdSlot"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>-->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const adContainer = ref(null)
// const dataAdClient = import.meta.env.VITE_GOOGLE_AD_CLIENT

const props = defineProps({
  dataAdSlot: String
})

onMounted(() => {
  /*if (window.adsbygoogle && adContainer.value) {
    const adsbygoogleScript = document.createElement('script')
    adsbygoogleScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    adsbygoogleScript.async = true
    adsbygoogleScript.setAttribute('crossorigin', 'anonymous')
    document.body.appendChild(adsbygoogleScript)

    adsbygoogleScript.onload = () => {
      (adsbygoogle = window.adsbygoogle || []).push({})
    }
  } */
})
</script>

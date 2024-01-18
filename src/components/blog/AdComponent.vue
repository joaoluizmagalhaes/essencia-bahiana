<template>
  <div ref="adContainer" class="w-full ad-container py-6">
    <ins class="adsbygoogle container mx-auto flex justify content-center"
         :data-ad-client="dataAdClient"
         :data-ad-slot="dataAdSlot"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const adContainer = ref(null)
const dataAdClient = import.meta.env.VITE_GOOGLE_AD_CLIENT

const props = defineProps({
  dataAdSlot: String
})

onMounted(() => {
  if (window.adsbygoogle && adContainer.value) {
    const adsbygoogleScript = document.createElement('script')
    adsbygoogleScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    adsbygoogleScript.async = true
    adsbygoogleScript.setAttribute('crossorigin', 'anonymous')
    document.body.appendChild(adsbygoogleScript)

    adsbygoogleScript.onload = () => {
      (adsbygoogle = window.adsbygoogle || []).push({})
    }
  }
})
</script>

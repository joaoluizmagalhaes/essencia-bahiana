<template>
  <q-btn
    align="left"
    size="md"
    class="py-2 rounded bg-white text-primary my-5 mt-auto shadow-2xl flex justify-start mx-auto"
    @click="openWhatsApp"
    >
    <q-avatar size="40px" class="mr-5">
      <q-img src="zap-icon.webp" alt="Ícone Whatsapp" />
    </q-avatar>
    {{ text }}
  </q-btn>
</template>
<script setup>

const props = defineProps({
  text: String
})

const openWhatsApp = () => {
  const phoneNumber = '5511993271622'
  const whatsAppURL = `https://wa.me/${phoneNumber}`
  window.open(whatsAppURL, '_blank')
}

</script>

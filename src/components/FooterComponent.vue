<template>
  <footer elevated class="bg-primary w-full text-light-gray">
    <div class="q-px-lg q-py-md">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex items-center">
          <img src="logo.svg" alt="Logo Essencia Bahiana" class="h-12 mr-4 bg-white rounded-full">
          <div class="text-2xl font-bold font-sans text-accent">{{ firstTitle }} <span class="uppercase text-3xl font-bold">{{ secondTitle }}</span></div>
        </div>
        <div class="flex items-center  mx-auto md:mx-0">
          <q-btn flat dense round icon="fa-brands fa-instagram" class="text-xl text-accent" @click="abrirInstagram" />
          <q-btn flat dense round icon="fa-brands fa-facebook-f" class="text-xl text-accent" @click="abrirFacebook" />
          <q-btn flat dense round icon="fa-brands fa-whatsapp" class="text-xl text-accent" @click="abrirWhatsApp" />
          <q-btn flat dense round icon="email" class="text-xl text-accent" @click="abrirEmail" />
        </div>
      </div>
      <div class="text-center q-mt-md text-accent flex flex-col">
        {{ copyRight }}
        <span class="cursor-pointer" @click="goToPrivacy">Políticas de Privacidade</span>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  copyRight: String,
  firstTitle: String,
  secondTitle: String,
})

function abrirInstagram() {
  const instagramURL = 'https://www.instagram.com/essencia.bahiana'
  window.open(instagramURL, '_blank')
}
function abrirFacebook() {
  const facebookURL = 'https://www.facebook.com/profile.php?id=61555489870691&mibextid=9R9pXO'
  window.open(facebookURL, '_blank')
}
function abrirWhatsApp() {
  const phoneNumber = '5511993271622'
  const whatsAppURL = `https://wa.me/${phoneNumber}`
  window.open(whatsAppURL, '_blank')
}
function abrirEmail() {
  const emailURL = 'mailto:contato@essenciabahiana.com.br'
  window.open(emailURL, '_blank')
}

function goToPrivacy() {
  router.push('/politicas-de-privacidade')
}

</script>

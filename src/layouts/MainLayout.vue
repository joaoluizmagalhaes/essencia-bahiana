<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar
      class="h-20 md:h-36 fixed w-full z-50 top-0 p-7 bg-transparent font-sans font-bold  ease-in-out duration-500"
      :class="{'!bg-white md:!h-24 drop-shadow-md': hasScrolled}"
    >
      <q-avatar
        class="w-16 h-16 md:w-32 md:h-32  ease-in-out duration-500"
        :class="{'md:!w-20 md:!h-20': hasScrolled}"
        @click="goTo('')"
      >
        <q-img src="/logo.svg" alt="Logo - Essência Bahiana" />
      </q-avatar>
      <h3 @click="goTo('')" class="ml-4 md:ml-6 font-sans font-bold text-lg md:text-2xl text-primary">Essência <span class="uppercase text-2xl md:text-3xl" @click="goTo('')">Bahiana</span></h3>
      <q-space />
      <HeaderMenu class="hidden lg:!flex"/>
      <q-btn flat @click="toggleRightDrawer" round dense icon="menu" color="primary" class=" lg:hidden" />
    </q-toolbar>
    <q-drawer v-model="rightDrawerOpen" overlay side="right" bordered class="q-py-lg flex flex-col">
      <div class="mx-auto mb-5 w-full flex justify-evenly items-center ">
        <q-avatar class="w-16 h-16 md:w-32 md:h-32">
          <q-img src="/logo.svg" alt="Logo - Essência Bahiana" />
        </q-avatar>
        <div class="text-lg text-primary font-bold font-sans">Essência <span class="uppercase text-xl">Bahiana</span></div>
      </div>
      <div>
      <!-- Conteúdo do Drawer -->
      <HeaderMenu />
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderMenu from '../components/HeaderMenu.vue'


const rightDrawerOpen = ref(false)
const hasScrolled = ref(false)
const tab = ref(null)
const router = useRouter()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

function goTo(path) {
  router.push(`/${path}`)
}

const handleScroll = () => {
  // Atualiza 'hasScrolled' com base na posição da rolagem
  if (window.scrollY > 20) {
    hasScrolled.value = true
  } else {
    hasScrolled.value = false
  }
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar
      class="h-20 md:h-36 fixed w-full z-50 top-0 p-7 bg-transparent font-sans font-bold  ease-in-out duration-500"
      :class="{'!bg-white md:!h-24 drop-shadow-md': hasScrolled}"
    >
      <q-avatar
        class="w-16 h-16 md:w-32 md:h-32  ease-in-out duration-500"
        :class="{'md:!w-20 md:!h-20': hasScrolled}"
      >
        <q-img src="logo.svg" alt="Logo - Essência Bahiana" />
      </q-avatar>
      <h3 class="ml-4 md:ml-6 font-sans font-bold text-lg md:text-2xl text-primary">Essência <span class="uppercase text-2xl md:text-3xl">Bahiana</span></h3>
      <q-space />
      <q-tabs v-model="tab" shrink class="text-primary hidden md:!block">
        <q-btn-dropdown auto-close stretch flat label="O que fazer em">
          <q-list separator class="text-primary bg-transparent bg-white">
            <q-item clickable @click="tab = 'movies'" class="bg-transparent">
              <q-item-section>Porto Seguro</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Arraial D'ajuda</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Trancoso</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Caraíva</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-tab name="tab5" label="Agenda" />
        <q-tab name="tab6" label="Passeios" />
        <q-tab name="tab7" label="Contato" />
      </q-tabs>
      <q-btn flat @click="toggleRightDrawer" round dense icon="menu" color="primary" class=" md:hidden" />
    </q-toolbar>
    <q-drawer v-model="rightDrawerOpen" overlay side="right" bordered class="q-py-lg flex flex-col">
      <div class="mx-auto mb-5 w-full flex justify-evenly items-center ">
        <q-avatar class="w-16 h-16 md:w-32 md:h-32">
          <q-img src="logo.svg" alt="Logo - Essência Bahiana" />
        </q-avatar>
        <div class="text-lg text-primary font-bold font-sans">Essência <span class="uppercase text-xl">Bahiana</span></div>
      </div>
      <div>
      <!-- Conteúdo do Drawer -->
      <q-tabs v-model="tab" vertical class="text-primary">
        <q-btn-dropdown auto-close stretch flat label="O que fazer em" class="w-full text-center">
          <q-list separator class="text-primary bg-transparent">
            <q-item clickable @click="tab = 'portoSeguro'" class="bg-transparent">
              <q-item-section>Porto Seguro</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'arraialDajuda'">
              <q-item-section>Arraial D'ajuda</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'trancoso'">
              <q-item-section>Trancoso</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'caraiva'">
              <q-item-section>Caraíva</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-tab name="agenda" label="Agenda" />
        <q-tab name="passeios" label="Passeios" />
        <q-tab name="contato" label="Contato" />
      </q-tabs>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rightDrawerOpen = ref(false)
const hasScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
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

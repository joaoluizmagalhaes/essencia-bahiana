<template>
  <q-tabs v-model="tab" :vertical="!isMdOrAbove ? false : true" class="text-primary">
    <q-btn-dropdown auto-close stretch flat label="O que fazer em" class="w-full text-center">
      <q-list separator class="text-primary md:bg-transparent bg-white ">
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
    <q-tab name="blog" label="Blog" @click="goTo('blog')"/>
    <!--<q-tab name="agenda" label="Agenda" />
    <q-tab name="passeios" label="Passeios" /> -->
    <q-tab name="contato" label="Contato" @click="goTo('', 'contact')"/>
  </q-tabs>

</template>
<script setup>
import { useQuasar, scroll } from 'quasar'
import { computed, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const { getScrollTarget, setVerticalScrollPosition } = scroll
const isMdOrAbove = computed(() => $q.screen.lt.md)
const $q = useQuasar()
const router = useRouter()
const tab = ref('')

function goTo(route, sectionId = '') {
  router.push(`/${route}`).then(() => {
    // Verifica se o ID da seção foi fornecido
    if (sectionId) {
      // Usa nextTick para esperar o próximo ciclo de atualização do DOM
      nextTick(() => {
        const sectionElement = document.getElementById(sectionId)
        if (sectionElement) {
          // Rola para a seção especificada
          scrollToElement(sectionElement)
        }
      })
    }
  })
}

function scrollToElement (el) {
  const target = getScrollTarget(el)
  const offset = el.offsetTop - 90
  const duration = 1000
  setVerticalScrollPosition(target, offset, duration)
}

</script>

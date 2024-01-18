<template>
  <q-tabs v-model="tab" :vertical="!isMdOrAbove" class="text-primary">
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
    <q-tab name="agenda" label="Agenda" />
    <q-tab name="passeios" label="Passeios" />
    <q-tab name="contato" label="Contato" />
  </q-tabs>

</template>
<script setup>
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const isMdOrAbove = computed(() => $q.screen.gt.md)
const $q = useQuasar()
const router = useRouter()

function goTo(route) {
  router.push('/'+route)
}

</script>

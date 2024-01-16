<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { functions, httpsCallable } from '../firebase.js'

const fetchPlaces = httpsCallable(functions, 'fetchPlaces')

onMounted( () =>{
  fetchPlaces({ location: 'latitude,longitude', radius: '5000', type: 'restaurant' })
  .then(result => {
    console.log(result.data); // Os lugares retornados pela API do Google Places
  })
  .catch(error => {
    console.error('Erro ao chamar a função:', error);
  });
})

</script>

<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { functions, httpsCallable } from '../firebase.js'
// import { connectFunctionsEmulator } from 'firebase/functions'

const callFetchPlaces = httpsCallable(functions, 'fetchPlaces')

onMounted( () =>{
  callFetchPlaces({ location: '-16.4286638 -39.103784', radius: '15000', type: 'restaurants' })
  .then(result => {
    console.log(result.data); // Os lugares retornados pela API do Google Places
  })
  .catch(error => {
    console.error('Erro ao chamar a função:', error);
  });
})

</script>

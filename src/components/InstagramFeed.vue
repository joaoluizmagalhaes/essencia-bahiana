<template>
  <div class="mx-auto max-w-full p-5">
    <div class="grid grid-cols-1 gap-4">
      <!-- Loop começa aqui -->
      <div class="instagram-post flex flex-col h-auto " v-for="post in posts" :key="post.id">
        <div class="relative pb-1/1 min-h-[300px]">
          <!-- Para imagens -->
          <img v-if="post.type && post.type.startsWith('image')" :src="post.media_url" :alt="post.caption" class="absolute object-cover w-full min-h-[200px] h-full rounded-lg"/>

          <!-- Para vídeos -->
          <video v-if="post.type && post.type.startsWith('video')" :src="post.media_url" controls class="absolute object-cover w-full h-full min-h-[300px] rounded-lg"></video>
        </div>
        <p class="mt-2 text-sm text-gray-600">{{ post.caption }}</p>
      </div>
      <!-- Loop termina aqui -->
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from 'src/firebase'
import {
  doc, getDoc
} from "@firebase/firestore"

const posts = ref([])

onMounted(async () => {
  try {
    const tokenRef = doc(db, 'configuration', 'instagramToken')
    const docSnap = await getDoc(tokenRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      const accessToken = data.token // Use o token conforme necessário
      const resultLimit = 6 // Número de posts a serem recuperados

      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}&limit=${resultLimit}`)
      if (!response.ok) {
        // Se houver um erro na resposta da API, imprima o status e o statusText.
        console.error(`Erro na API: ${response.status} ${response.statusText}`)
        const errorData = await response.json()
        console.error(errorData) // Isso pode fornecer detalhes adicionais fornecidos pela API.
        return
      }
      const mediaData = await response.json()
      posts.value = mediaData.data

      const typePromises = posts.value.map(async (post) => {
        const type = await getMediaType(post.media_url)
        return { ...post, type }
      })

      // Aguarde todas as requisições HEAD para atualizar os tipos de mídia
      const postsWithType = await Promise.all(typePromises)
      posts.value = postsWithType // Atualizar o estado com os novos objetos

    } else {
      console.error('Documento do token não encontrado.')
    }
  } catch (error) {
    console.error('Erro ao carregar o feed do Instagram ou ao acessar o Firestore:', error)
  }
})

async function getMediaType(url) {
  const response = await fetch(url, { method: 'HEAD' })
  return response.headers.get('Content-Type')
}

</script>

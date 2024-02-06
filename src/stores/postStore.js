import { defineStore } from 'pinia'
import { doc, getDoc } from "firebase/firestore"
import { db } from 'src/firebase'

export const usePostStore = defineStore('postStore', {
  state: () => ({
    post: {},
    isDataLoaded: false,
    title: 'Page',
    description: 'Essência Bahiana Site',
    keywords: '',
    imageURL: 'hero.webp',
  }),
  actions: {
    async fetchPost(id) {
      const docRef = doc(db, 'blog', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        this.post = { id: docSnap.id, ...docSnap.data() }
        this.title = this.post.title
        this.description = this.post.description
        this.keywords = this.post.keywords
        this.imageURL = this.post.imageURL
      }

      this.isDataLoaded = true
    }
  }
})

// src-ssr/firebaseUtils.js
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export async function fetchPostData(postId) {
  const db = getFirestore();
  const postRef = doc(db, 'blog', postId);
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    return postSnap.data();
  } else {
    throw new Error('Post not found');
  }
}

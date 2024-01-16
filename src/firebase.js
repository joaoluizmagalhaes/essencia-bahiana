// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getFunctions, httpsCallable } from 'firebase/functions';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
/*const appCheck = initializeAppCheck( app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3),
  isTokenAutoRefreshEnabled: true
}) */
const functions = getFunctions(app)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, functions, httpsCallable }

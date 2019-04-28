import firebase from 'firebase'
import E from '../config/env'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: E.API_KEY,
    authDomain: E.AUTH_DOMAIN,
    databaseURL: E.DATABASE_URL,
    projectId: E.PROJECT_ID,
    storageBucket: E.STORAGE_BUCKET,
    messagingSenderId: E.MESSAGING_SENDER_ID
  })
}

export default firebase

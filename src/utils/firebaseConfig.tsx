
import firebase from 'firebase';
export const firebaseConfig = {
    apiKey: "yBCE26g7liReZTboKiuV8jyEU",
    authDomain: "chatapp-166f9.ebaseapp.com",
    databaseURL: "https://www.firebaseeio.com",
    projectId: "app-166f9",
    storageBucket: "66f9.appspot.com",
    messagingSenderId: "106129352",
    appId: "25138:web:d2507557e4b",
    measurementId: "G-CH5F2HD2RP"
}

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

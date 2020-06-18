import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDH4BbFyezDzLM8Z2jHUMpJmkvhH6t3AXE",
    authDomain: "nyc-web.firebaseapp.com",
    databaseURL: "https://nyc-web.firebaseio.com",
    projectId: "nyc-web",
    storageBucket: "nyc-web.appspot.com",
    messagingSenderId: "752096694116",
    appId: "1:752096694116:web:932aa73a21dafcc72f7471",
    measurementId: "G-8ZDHW19N7L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;
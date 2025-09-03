// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
  import {getAuth  } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCSjw3LK88FUYtBhR0_AoETzrn7a7iB7xk",
    authDomain: "chat-app-5e84e.firebaseapp.com",
    projectId: "chat-app-5e84e",
    storageBucket: "chat-app-5e84e.firebasestorage.app",
    messagingSenderId: "794299100996",
    appId: "1:794299100996:web:aec625de5d1896cce27111",
    measurementId: "G-T7ZC28JKXG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export { app, analytics , auth, db };
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDUe8iCyiLY24isXDcrSJRH8xVptXcVpg0",
    authDomain: "hackaton-e110f.firebaseapp.com",
    projectId: "hackaton-e110f",
    storageBucket: "hackaton-e110f.firebasestorage.app",
    messagingSenderId: "896836357314",
    appId: "1:896836357314:web:3f95043a3f8bfe7bf77f5b",
    measurementId: "G-L1R3ZD55J2"
  };

  const app = initializeApp(firebaseConfig);
  console.log(app);


  
  const auth = getAuth(app);
  console.log(auth);





export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification}

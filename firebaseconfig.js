import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

  const db = getFirestore(app);
  console.log(db);
  

  
  const auth = getAuth(app);
  console.log(auth);


  //Firestore
document.addEventListener('DOMContentLoaded', function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user.email);
      
      let contact = document.getElementById('contactForm');
      if (contact) {
        contact.addEventListener('submit', async (event) => {
          event.preventDefault();

          let name = document.getElementById('fname').value;
          let email = document.getElementById('email').value;
          let message = document.getElementById('message').value;

          // Save message only if user is logged in
          try {
            const docRef = await addDoc(collection(db, "users"), {
              name: name,
              email: email,
              message: message,
              timestamp: new Date(),
              userId: user.uid // Save the user's ID for reference
            });
            alert("Your message has been sent successfully! Thanks for your feedback");
            contact.reset();
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("Failed to send your message. Please try again.");
          }
        });
      }
    } else {
      console.log("User is not logged in.");
      alert("You need to be logged in to send a message.");

    }
  });
});

export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }

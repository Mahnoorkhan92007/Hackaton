import{ auth, db, createUserWithEmailAndPassword, doc, setDoc } from './firebaseconfig.js';

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form from submitting traditionally

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (email === '' || password === '' || name === '' || message === '') {
    alert("Please fill in all fields.");
    return; // Exit if any field is empty
  }

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signup successful!");

      // Store user data in Firestore
      const userRef = doc(db, "users", user.uid);  // Use UID as the document ID

      setDoc(userRef, {
        name: name,
        email: email,
        message: message
      })
        .then(() => {
          console.log('User data stored successfully!');
          alert('Your information has been stored!');
          window.location.href = "home.html";  // Redirect to home page
        })
        .catch((error) => {
          console.error("Error storing data:", error.message);
          alert(`Error: ${error.message}`);
        });

    })
    .catch((error) => {
      console.log("Error signing up:", error.message);
      alert(`Error: ${error.message}`);
    });
});
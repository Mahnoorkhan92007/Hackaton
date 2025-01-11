import{ auth,  createUserWithEmailAndPassword } from './firebaseconfig.js';

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form from submitting traditionally

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if all fields are filled
  if (email === '' || password === '' || name === '') {
    alert("Please fill in all fields.");
    return; // Exit if any field is empty
  }

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signup successful!");
      signupForm.reset()
      window.location.href= './login.html'
    })

    .catch((error) => {
      console.log("Error signing up:", error.message);
      alert(`Error: ${error.message}`);
    });
});
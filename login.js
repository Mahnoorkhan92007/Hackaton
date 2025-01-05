import { auth, signInWithEmailAndPassword } from './firebaseconfig.js';
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     
    alert('Login successful!');
    console.log(user);
    
      window.location.href = './index.html';
    })
    .catch((error) => {
      console.error('Login error:', error.message);
      alert(error.message);
    });
});

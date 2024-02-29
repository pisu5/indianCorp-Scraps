// Import necessary functions and instances from Firebase modules
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { ref, set } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

function signup() {
  const username = document.getElementById("user-name").value;
  const email = document.getElementById("email-user").value;
  const password = document.getElementById("password").value;
  const mob = document.getElementById("mob").value;
  const city = document.getElementById("cityy").value;

  // Use auth and database as needed
  // For example, creating a new user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Add user data to the Realtime Database
      const userId = userCredential.user.uid;
      const userRef = ref(database, "users/" + userId);
      set(userRef, {
        username: username,
        email: email,
        // You might not want to store the password in the database for security reasons
        // Instead, consider using only email and username in the database
      });

      alert("Signup successful!");
      // You may redirect or perform other actions after successful signup
    })
    .catch((error) => {
      console.error("Error creating user:", error.message);
      alert("Signup failed. Please try again.");
    });
}

const signBut = document.getElementById("signBut");
signBut.addEventListener("click", signup);

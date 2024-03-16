/// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA36ZgXkhQrX-UgF3MZODX1ksg_NskYUm0",
  authDomain: "kabadibalabhopal-c8ecf.firebaseapp.com",
  databaseURL: "https://kabadibalabhopal-c8ecf-default-rtdb.firebaseio.com",
  projectId: "kabadibalabhopal-c8ecf",
  storageBucket: "kabadibalabhopal-c8ecf.appspot.com",
  messagingSenderId: "51167133311",
  appId: "1:51167133311:web:9904342d4534ed55dd894a",
  measurementId: "G-5C404RC5EK",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
  const signForm = document.getElementById("signBut");
  signForm.addEventListener("click", function (event) {
    event.preventDefault();
    let userName = document.getElementById("user-name").value;
    let phone = document.getElementById("mob").value;
    let city = document.getElementById("cityy").value;
    let email = document.getElementById("email-user").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(function (userCredential) {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);
        
        // Clear the form
        document.getElementById("user-name").value = "";
        document.getElementById("mob").value = "";
        document.getElementById("cityy").value = "";
        document.getElementById("email-user").value = "";
        document.getElementById("password").value = "";
        
        // Redirect to another page
        
        window.location.href = "../index.html";
      })
      .catch(function (error) {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup failed:", errorMessage);

        // Check if the error is due to email already in use
        if (errorCode === "auth/email-already-in-use") {
          // Show a pop-up message
          alert("Email is already in use. Please use a different email.");
        }
      });
  });
  
});

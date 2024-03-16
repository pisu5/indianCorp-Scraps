// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
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
  const loginForm = document.getElementById("loginBut");
  loginForm.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("lEmail").value;
    const password = document.getElementById("lPass").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(function (userCredential) {
        // Login successful
        const user = userCredential.user;
        console.log("User logged in:", user);
        window.location.href = "/aboutUs.html";
        // You can redirect to another page or perform other actions here
      })
      .catch(function (error) {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorMessage);

        // Show alert if the password is incorrect
        if (errorCode === "auth/wrong-password") {
          alert("Incorrect password. Please try again.");
        }
      });
  });

  let forgotPasswordLink = document.getElementById("flink");

  forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("lEmail").value;

    sendPasswordResetEmail(auth, email)
      .then(function () {
        // Password reset email sent successfully
        console.log("Password reset email sent");
        window.location.href = "../password-reset-sent.html";
      })
      .catch(function (error) {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Password reset email failed:", errorMessage);
        alert("Failed to send password reset email. Please try again.");
      });
  });
});

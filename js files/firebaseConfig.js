// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA36ZgXkhQrX-UgF3MZODX1ksg_NskYUm0",
  authDomain: "kabadibalabhopal-c8ecf.firebaseapp.com",
  databaseURL: "https://kabadibalabhopal-c8ecf-default-rtdb.firebaseio.com",
  projectId: "kabadibalabhopal-c8ecf",
  storageBucket: "kabadibalabhopal-c8ecf.appspot.com",
  messagingSenderId: "51167133311",
  appId: "1:51167133311:web:9904342d4534ed55dd894a",
  measurementId: "G-5C404RC5EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
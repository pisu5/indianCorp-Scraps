import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA36ZgXkhQrX-UgF3MZODX1ksg_NskYUm0",
  authDomain: "kabadibalabhopal-c8ecf.firebaseapp.com",
  projectId: "kabadibalabhopal-c8ecf",
  storageBucket: "kabadibalabhopal-c8ecf.appspot.com",
  messagingSenderId: "51167133311",
  appId: "1:51167133311:web:9904342d4534ed55dd894a",
  measurementId: "G-5C404RC5EK",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Get authentication and database instances
 const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export{auth,database};
//export { auth, database };

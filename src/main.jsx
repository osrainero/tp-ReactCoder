import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncZxPGmAYuNgNuQKu-liv01OrAm_GG2A",
  authDomain: "coderreactor1.firebaseapp.com",
  projectId: "coderreactor1",
  storageBucket: "coderreactor1.appspot.com",
  messagingSenderId: "884452812101",
  appId: "1:884452812101:web:66d71a54f3549c41618a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// // PROYECTO 1 EN FIREBASE.... ME QUEDE SIN BALAS!!!!!

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAPQ2eJb2biS97cBcgh5vmlFB8ER5xVQI0",
//   authDomain: "coderreactraineroo.firebaseapp.com",
//   projectId: "coderreactraineroo",
//   storageBucket: "coderreactraineroo.appspot.com",
//   messagingSenderId: "413661193425",
//   appId: "1:413661193425:web:27bf8d93c2ea65a67bd1f0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

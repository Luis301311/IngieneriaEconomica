// Import the functions you need from the SDKs you need
// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM0J9dHWZwa7EDfbLwFCkMyX5MXyAtpyg",
  authDomain: "ingieneriaeconomicadb.firebaseapp.com",
  projectId: "ingieneriaeconomicadb",
  storageBucket: "ingieneriaeconomicadb.firebasestorage.app",
  messagingSenderId: "302223576112",
  appId: "1:302223576112:web:8c19bf687b97cf68ab31f5",
  measurementId: "G-46GFFYHVYL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Auth para usar en App.jsx
export const auth = getAuth(app);

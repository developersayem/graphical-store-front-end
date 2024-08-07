// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfxloHW5dbOUe23kYiFKpDirYBKMM1KLM",
  authDomain: "graphical-store.firebaseapp.com",
  projectId: "graphical-store",
  storageBucket: "graphical-store.appspot.com",
  messagingSenderId: "675875924993",
  appId: "1:675875924993:web:0dc1601d4d650b6600a400",
  measurementId: "G-8D8X6S499Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


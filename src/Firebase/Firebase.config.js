// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APPP_ID,
    apiKey: "AIzaSyAhMPMRlExzuDZBSXbwXN9q8duH9fdkmoU",
    authDomain: "graphic-assainment-11.firebaseapp.com",
    projectId: "graphic-assainment-11",
    storageBucket: "graphic-assainment-11.appspot.com",
    messagingSenderId: "741879255636",
    appId: "1:741879255636:web:3af241e8dc192545eb13c1"
};
console.log(process.env.REACT_APP_API_KEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
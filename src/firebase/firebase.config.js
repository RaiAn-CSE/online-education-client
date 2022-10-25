// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUlOuFxxV0ekIDXekq60lzkZCWCFVMkIQ",
    authDomain: "online-education-f904d.firebaseapp.com",
    projectId: "online-education-f904d",
    storageBucket: "online-education-f904d.appspot.com",
    messagingSenderId: "1030861285606",
    appId: "1:1030861285606:web:06a48678973c41117bf327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
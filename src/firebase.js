// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4FymAbP7MnH8gDnzVNKNk1Bfu3JhvWaM",
    authDomain: "react-disney-plus-app-507d0.firebaseapp.com",
    projectId: "react-disney-plus-app-507d0",
    storageBucket: "react-disney-plus-app-507d0.appspot.com",
    messagingSenderId: "86987221939",
    appId: "1:86987221939:web:27a487b946f96a173839c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 내보내기 위한 장치
export default app;

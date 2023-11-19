// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCbAMykTjIyjg3iaB_gefgUl97HIZdbKbs",
    authDomain: "theateam-f23.firebaseapp.com",
    projectId: "theateam-f23",
    storageBucket: "theateam-f23.appspot.com",
    messagingSenderId: "180712652454",
    appId: "1:180712652454:web:0b8cb54f24f7dcafa03e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

//import { useEffect, useState, useRef } from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
    /*apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"*/

    apiKey: "AIzaSyCfriZeFYMUV8YAeo3xmBrkisLNyDCQQsk",
    authDomain: "cvelectronicodediodavid.firebaseapp.com",
    projectId: "cvelectronicodediodavid",
    storageBucket: "cvelectronicodediodavid.appspot.com",
    messagingSenderId: "112854746605",
    appId: "1:112854746605:web:5ec68501648048e46fd3e4",
    measurementId: "G-ZTX1K328EF"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

//import { useEffect, useState, useRef } from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    /*apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"*/

    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

export const getSomeDataFromFirebase = async (tabla) => {
    try {
        const querySnapshot = await getDocs(collection(db, tabla));
        return querySnapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()))
    } catch (error) {
        return error
    }
}

export const updateDocument = async (tabla, id, objeto) => {
    await setDoc(doc(db, tabla, id), objeto )
}
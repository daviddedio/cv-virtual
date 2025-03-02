// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, query } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCfriZeFYMUV8YAeo3xmBrkisLNyDCQQsk",
    authDomain: "cvelectronicodediodavid.firebaseapp.com",
    projectId: "cvelectronicodediodavid",
    storageBucket: "cvelectronicodediodavid.appspot.com",
    messagingSenderId: "112854746605",
    appId: "1:112854746605:web:5ec68501648048e46fd3e4",
    measurementId: "G-ZTX1K328EF"
};

export const db = getFirestore(initializeApp(firebaseConfig));

/*export async function getData(tipo){
    const dataCol = collection(db, tipo);
    const result = await getDocs(dataCol);
    return getArrayFromCollection(result)
}*/

export const getData = async (tipo) => {
    const dataCol = collection(db, tipo)
    const result = await getDocs(dataCol)
    //return getArrayFromCollection(result)
    return result.querySnapShot
}

export const getArrayFromCollection = (coleccion) => {
    return coleccion.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
}




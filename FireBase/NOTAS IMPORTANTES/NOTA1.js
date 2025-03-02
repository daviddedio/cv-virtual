import { useEffect, useState, useRef } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useFetchCollection = (collectionName) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchedRef = useRef(false); // Controla si ya se hizo la petición

    useEffect(() => {
        if (fetchedRef.current) return; // Evita que la petición se repita
        fetchedRef.current = true;

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                const result = querySnapshot.docs.reduce((acc, doc) => {
                    acc[doc.id] = doc.data();
                    return acc;
                }, {});
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { data, loading, error };
};

export default useFetchCollection;



const obtenerInformacion = useMemo(()=>{        
    async () => {
        const querySnapshot = await getDocs(collection(db, 'InfoPersonal'));
        const result =  querySnapshot.docs.reduce((acc, doc) => {
            acc[doc.id] = doc.data();
            return acc;
        }, {});
        cargarInformacion(result)
    }
}) 
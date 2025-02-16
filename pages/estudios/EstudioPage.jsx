import { db } from '../../FireBase/FireBaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect } from 'react';

export const EstudioPage = () => {

    async function getCities(db) {
        const citiesCol = collection(db, 'Estudios');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList);
    }

    useEffect(()=>{
        getCities(db)
    },[])

    return (
        <div> Componente </div>
    )
}
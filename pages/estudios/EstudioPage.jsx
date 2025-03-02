import { useEffect, useState, useContext } from 'react';
import { datosPrueba } from '../../FireBase/ReturEstudios'
import {Context} from '../../context/Context'
import { SchoolCard } from '../../componentes/SchoolCard/SchoolCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import './EstudioPage.css'

export const EstudioPage = () => {

    const [estudios, setEstudios] = useState([])

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { estudiosContext, setEstudiosContext } = useContext(Context)

    const getDataFromFirebase = async () => {
        if (estudiosContext) {
            setEstudios(estudiosContext)
            console.log('from Context')
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Estudios"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setData(data.sort((a,b) => b.Orden - a.Orden))
            setEstudios(data)
            setEstudiosContext(data)
            console.log('From hook')
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    if (error) {
        return <p>Error</p>
    }

    return (
        <div className="SchollCardConteiner"> {
            estudios.map(est => <SchoolCard
                Nombre={est.Nombre}
                Universidad={est.Universidad}
                info={est.Info}
                key={est.Orden}
                Imagen={est.Imagen}
            />)
        }
        </div>
    )
}
import { useEffect, useState, useContext } from 'react';
import { SchoolCard, SchoolCardLoading } from '../../componentes/SchoolCard/SchoolCard';
import { Context } from '../../context/Context'
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
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Estudios"));
            const data = querySnapshot.docs.map(doc => Object.assign({id:doc.id},doc.data()))
            setData(data.sort((a, b) => b.Orden - a.Orden))
            setEstudios(data)
            setEstudiosContext(data)
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
            loading ?
                Array.from({ length: 6 }).map((it, index) => <SchoolCardLoading key={index}/>)
                :
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
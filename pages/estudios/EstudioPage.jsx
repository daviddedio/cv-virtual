import { useEffect, useState, useContext } from 'react';
import { SchoolCard, SchoolCardLoading } from '../../componentes/SchoolCard/SchoolCard';
import { Context } from '../../context/Context'
import { getSomeDataFromFirebase } from '../../FireBase/FireBaseReturnData'
import { settear } from '../../Utilidades/Utilidades';
import './EstudioPage.css'

export const EstudioPage = () => {

    const [estudios, setEstudios] = useState([])

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { estudiosContext, setEstudiosContext } = useContext(Context)

    const getDataFromFirebase = async () => {
        if (estudiosContext) {
            settear([setEstudios],estudiosContext)
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase('Estudios')
            settear([setData, setEstudios, setEstudiosContext], datos.sort((a,b)=> b.Orden-a.Orden))
        } catch (error) {
            console.log(error.message)
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
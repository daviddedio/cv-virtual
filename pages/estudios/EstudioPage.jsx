import { useEffect, useState } from 'react';
import { datos, datosPrueba } from '../../FireBase/ReturEstudios'
import { SchoolCard } from '../../componentes/SchoolCard/SchoolCard';
import './EstudioPage.css'

export const EstudioPage = () => {

    const [estudios, setEstudios] = useState([])

    const cargarInformacion = async () => {
        //setEstudios(datosPrueba)
        const temp = datosPrueba.sort((a,b) => b.Orden - a.Orden )
        setEstudios(temp)
    }

    useEffect(() => {
        cargarInformacion()
    }, [])

    return (
        <div className="SchollCardConteiner"> {
            estudios.map(est=><SchoolCard 
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
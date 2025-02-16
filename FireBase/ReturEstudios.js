import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { db } from './FireBaseConfig'

export const estudios = async () => {

    const data = getCities()


    /*return [
    {
        "Nombre": "Estudios secundarios",
        "Universidad": "Escuela  de Ens. Media Nº 446, Venado Tuerto",
        "fInicio": {
            "seconds": 920246400,
            "nanoseconds": 0
        },
        "Info": "Fecha ingreso: Marzo 1999 - Fecha Finalizacion: Diciembre 2003. Orientación en Cs Naturales. "
    },
    {
        "Info": "Fecha de ingreso: Febrero 2010 – Finalización: Julio 2012. Entrega y defensa de Tesis Noviembre 2018.",
        "Nombre": "Licenciatura en tecnología alimentaria",
        "Universidad": "UNR Casilda",
        "fInicio": {
            "seconds": 1267315200,
            "nanoseconds": 0
        }
    },
    {
        "Nombre": "Técnico en laboratorio",
        "Info": "Inicio: Febrero 2004  –  Finalización: Diciembre 2008",
        "Universidad": "UNRC",
        "fInicio": {
            "seconds": 1075507200,
            "nanoseconds": 0
        }
    },
    {
        "Nombre": "Técnico en tecnología alimentaria",
        "Universidad": "UNR Casilda",
        "Info": "Fecha de ingreso: Marzo 2010 -  Finalización: Julio 2011 (titulo intermedio de la licenciatura en tecnología alimentaria)",
        "fInicio": {
            "seconds": 1267142400,
            "nanoseconds": 0
        }
    },
    {
        "Nombre": "Estudios Primarios",
        "Universidad": "Escuela  normal Nº 1248",
        "fInicio": {
            "seconds": 699494400,
            "nanoseconds": 0
        },
        "Info": "Fecha inicio: 1992 -  Finalización: 1998"
    },
    {
        "Universidad": "UNRC",
        "Info": "Cursado en universidad nacional de Rio Cuarto, hasta el primer cuatrimestre el tercer año. Ingreso: año 2004",
        "Nombre": "Microbiología (Incompleto)",
        "fInicio": {
            "seconds": 1075507200,
            "nanoseconds": 0
        }
    }
    ]*/
}
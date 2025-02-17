import { getData } from './FireBaseConfig'

export const datos = await getData("Estudios")

export const datosPrueba = [
    {
        "Info": "Fecha de ingreso: Febrero 2010 – Finalización: Julio 2012. Entrega y defensa de Tesis Noviembre 2018.",
        "Nombre": "Licenciatura en tecnología alimentaria",
        "Universidad": "UNR Casilda",
        "Orden": 6,
        "Imagen": "https://lanuevasenda.com.ar/wp-content/uploads/2022/06/FACU.jpeg"
    },
    {
        "Nombre": "Técnico en tecnología alimentaria",
        "Universidad": "UNR Casilda",
        "Info": "Fecha de ingreso: Marzo 2010 -  Finalización: Julio 2011 (titulo intermedio de la licenciatura en tecnología alimentaria)",
        "Orden": 5,
        "Imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIDb9kzXSnxWDKt7W0JUZHH1MbmcYb6gPZg&s"
    },
    {
        "Nombre": "Técnico en laboratorio",
        "Info": "Inicio: Febrero 2004  –  Finalización: Diciembre 2008",
        "Universidad": "UNRC",
        "Orden": 4,
        "Imagen": "https://canalc.com.ar/wp-content/uploads/2024/04/image-1076-1140x550.png"
    },
    {
        "Universidad": "UNRC",
        "Info": "Cursado en universidad nacional de Rio Cuarto, hasta el primer cuatrimestre el tercer año. Ingreso: año 2004",
        "Nombre": "Microbiología (Incompleto)",
        "Orden": 3,
        "Imagen": "https://dc.exa.unrc.edu.ar/images/slider7001400/militancy3.jpg"
    },
    {
        "Nombre": "Estudios secundarios",
        "Universidad": "Escuela  de Ens. Media Nº 446, Venado Tuerto",
        "Info": "Fecha ingreso: Marzo 1999 - Fecha Finalizacion: Diciembre 2003. Orientación en Cs Naturales. ",
        "Orden": 2,
        "Imagen": "https://www.venadovirtual.com.ar/guia_serv/images_escuela/fotos/Esc%20Nacional%202%20PA241995.JPG"
    },
    {
        "Nombre": "Estudios Primarios",
        "Universidad": "Escuela  normal Nº 1248",
        "Info": "Fecha inicio: 1992 -  Finalización: 1998",
        "Orden": 1,
        "Imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcIPC4IkkMwSmHpKI45I3crtXHXfoJA_wMg&s"
    }
]
import { getData } from './FireBaseConfig'

//export const datos = await getData("Cursos")
export const datosPrueba = [
    {
        "Nombre": "Introducción HACCP",
        "Informacion": "abril 2010",
        "fInicio": {
            "seconds": 1270080000,
            "nanoseconds": 0
        },
        "Comentarios": "dictado por Ing. en alimentación Tello, Ariel Carlos. Control de calidad Swift JBS.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Lenguaje JAVA",
        "Informacion": "Noviembre 2021",
        "fInicio": {
            "seconds": 1633046400,
            "nanoseconds": 0
        },
        "Comentarios": "Introducción a Java, desarrollo app de consola",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/introduccion%20java.JPG?alt=media&token=9ab52777-e3cb-468b-8fec-d63672ddc5ee"
    },
    {
        "Informacion": "Diciembre 2021",
        "fInicio": {
            "seconds": 1640044800,
            "nanoseconds": 0
        },
        "Comentarios": "Diseño de interfaz de usuario, elementos de interfaz, jerarquía de objetos, vistas, Layout, botones y eventos, controles de entrada, entrada de texto, tipos de menú (contextuales, popup), dialogos y pickers, navegación entre actividades, recycleView y depuración.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/interfaz%20de%20usuario.JPG?alt=media&token=974a29d5-37d7-466e-a132-ac29f84a60b7",
        "Nombre": "Interfaz de usuario Android"
    },
    {
        "Nombre": "Auditorias basadas en riesgo",
        "Informacion": "30 de agosto",
        "fInicio": {
            "seconds": 1693393200,
            "nanoseconds": 235000000
        },
        "Comentarios": "Dictado por Garmaz, Mirta - Pellegrini, Leonel y Del Guercio, Emmanuel. Módulo 1: Introducción al ssitema de gestión CAMS. Módulo 2: Proceso de auditorías. Módulo 3: Introducción a los documentos de soporte al negocio (muestreo-plan de calidad). Módulo 4: Práctica de auditoría. Duración: 3 días.",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Calidad"
    },
    {
        "Comentarios": "Dictado por Pablo Fernando Gatto y Hernan A. Fernandez. UTN Resistencia via elearning-Total.com. 32hr",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/Gestion%20de%20calidad%20UTN%20res.png?alt=media&token=82feedc1-b2e7-469b-b22d-e0807b82b86d",
        "Informacion": "Marzo 2023",
        "Nombre": "Gestión de calidad  y mejora continuaISO 9001",
        "fInicio": {
            "seconds": 1677672966,
            "nanoseconds": 519000000
        },
        "Categoria": "Calidad"
    },
    {
        "Nombre": "Extracción sanguíneas",
        "Informacion": "Enero 2011",
        "fInicio": {
            "seconds": 1293840000,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en extracción (Vena, arteria radial y femoral) para laboratorio de análisis clínico a cargo de Bioq Sarasola, Silvana",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Lean - Six Sigma",
        "Informacion": "Enero 2020",
        "fInicio": {
            "seconds": 1577836800,
            "nanoseconds": 0
        },
        "Comentarios": "Curso lean - six sigma para la detección de desperdicios en proceso varios. Sistema DMAIC, herramientas de proceso de datos, estudio de datos.\nDuración: 24hr (3 días de 8hr). Finalizado en 22 - 23 - 24 de Enero 2020.",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Proyecto"
    },
    {
        "Nombre": "Optimo manejo de balanzas y pipetas",
        "Informacion": "Octubre 2020",
        "fInicio": {
            "seconds": 1603929600,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en “Optimo manejo de balanzas y pipetas”, Realizado por Dr. Di Paolo, Matias.\nModalidad Webinar\nDuración 2hr.\nFecha 29 de Octubre 2020",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/certificado-todo-lo-que-deberia-saber-sobre-balanzas-y-pipetas%20(1).JPG?alt=media&token=030d843f-ef41-417c-a343-18bb0e5ac430"
    },
    {
        "Nombre": "Introduccion a Python",
        "Informacion": "Abril 2021",
        "fInicio": {
            "seconds": 1617235200,
            "nanoseconds": 0
        },
        "Comentarios": "Introducción a Python, conceptos básicos/moderados, trabajo final: desarrollo de billetera virtual con conexión a la API de Binace",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/python.jpg?alt=media&token=1d7ab141-4f14-4b94-b201-b6793ab8b8a2"
    },
    {
        "Nombre": "SafeStart Cargill",
        "Informacion": "Noviembre - Diciembre 2013",
        "fInicio": {
            "seconds": 1385856000,
            "nanoseconds": 0
        },
        "Comentarios": "Curso teórico-práctico en programa SAFEStart en la detección de conductas que generen accidentes y/o fatalidades, dictado por Ing. Ramas, Juan Pedro. Duración: 10 hr. Dictados 18-27 noviembre y 2-9-16 diciembre del 2013",
        "Categoria": "Seguridad",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "BPL (Buenas prácticas de laboratorio)",
        "Informacion": "Octubre 2019",
        "fInicio": {
            "seconds": 1569888000,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de Buenas prácticas en laboratorio, resolución 626/2017, dictado por Lic. Bulffer, Romina.\nModalidad a distancia de la UTN Chaco – Resistencia.\nDuración 30hr.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/BPL.JPG?alt=media&token=37262aee-aa96-4764-95ca-199ec801f3cf"
    },
    {
        "Nombre": "RCP (Resucitación cardio-pulmonar)",
        "Informacion": "Mayo 2014",
        "fInicio": {
            "seconds": 1398902400,
            "nanoseconds": 0
        },
        "Comentarios": "Curso RCP teórico-práctico dictado por el Dr. Guzman Adolfo. Duración: 2hr",
        "Categoria": "Seguridad",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Calibración y verificación de termómetros",
        "Informacion": "Febrero 2010",
        "fInicio": {
            "seconds": 1264982400,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitaciones en planta JBS Swift San José para las verificaciones y calibraciones de termómetros bimetálicos, alcohol, mercurio y digitales. ",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "FrontEnd",
        "Informacion": "Julio 2021",
        "fInicio": {
            "seconds": 1625097600,
            "nanoseconds": 0
        },
        "Comentarios": "El curso contiene 4 modulos: html, css, js y bootstrap. Trabajo final: realizar una página que gestione eventos.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/FrontEnd.jpg?alt=media&token=14d791dd-5909-41c5-9199-038bb865fd86"
    },
    {
        "Nombre": "Microbiología general",
        "Informacion": "Julio 2009",
        "fInicio": {
            "seconds": 1246406400,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de Microbiología general dictado por Ing. agrónomo David Teitelbaum director técnico de laboratorios JBS Swift ",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "GPD (Gestión por directrices)",
        "Informacion": "Febrero 2020",
        "fInicio": {
            "seconds": 1580515200,
            "nanoseconds": 0
        },
        "Comentarios": "Curso GPD (Gestión por directrices) dictado por personal de Aquila en Febrero 2020.\nModalidad: Presencial.\nDuración: 2:30hr\nDictado por ing. Vinicius Justos. ",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Proyecto"
    },
    {
        "Nombre": "BPL (Buenas prácticas de laboratorio)",
        "Informacion": "Enero 2015",
        "fInicio": {
            "seconds": 1420070400,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en BPL, normas generales, puesta a punto. Dictadas por Ing. Bacci, Regina - responsable de laboratorios LATAM Cargill",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Preparación de muestras para espectroscopia atómica",
        "Informacion": "Agosto 2020",
        "fInicio": {
            "seconds": 1596240000,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en “Preparación de muestras para espectroscopia atómica” Realizado por Dr. Iñon, Fernando.\nModalidad Webinar\nDuración 2hr.\nFecha 6 de Agosto 2020",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/certificado-preparacion-de-muestras-para-tecnicas-de-espectroscopia-atomica%20(1).JPG?alt=media&token=10ff6af0-626b-41df-88b1-bc98428b1ce0"
    },
    {
        "Nombre": "Absorción atómica",
        "Informacion": "Noviembre 2012",
        "fInicio": {
            "seconds": 1351728000,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en técnica analítica para equipo Shimadzu AA7000 y generador de hidruros para la determinación de metales pesados dictado por el Lic. Diego Grassi, responsable de investigación y desarrollo de Jenks.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Introducción ISO 9000 y 22000",
        "Informacion": "Diciembre 2010",
        "fInicio": {
            "seconds": 1291161600,
            "nanoseconds": 0
        },
        "Comentarios": "dictados por Mic. Ibarra, Flavio. ",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Calidad"
    },
    {
        "Nombre": "Programación .NET",
        "Informacion": "Abril 2021",
        "fInicio": {
            "seconds": 1617235200,
            "nanoseconds": 0
        },
        "Comentarios": "Desarrollo de app en C# con conexión a SQL",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/curso%20net.JPG?alt=media&token=eeeacbfa-05bb-4001-a47d-3f65827c9e78"
    },
    {
        "Nombre": "Introducción a GIT",
        "Informacion": "Mayo 2021",
        "fInicio": {
            "seconds": 1619827200,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de NEXT_U, documentación, uso y aplicaciones, ejercicios de clonación, branch y commit.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/git.jpg?alt=media&token=b36627ee-dc68-4e7d-8afe-f089c7532f53"
    },
    {
        "Nombre": "Micotoxinas por Randox",
        "Informacion": "Agosto 2018",
        "fInicio": {
            "seconds": 1533081600,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en manejo de equipo RANDOX para micotoxina. Kit Mico 7. Dictado por Dra Vanesa Mendez. Teórico/práctico.\nDuración: 60 hr. Fecha 22 - 23- 24 /08/2018\n",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Gestión documental de laboratorio",
        "Informacion": "Junio 2018",
        "fInicio": {
            "seconds": 1527811200,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación para manejo de sistema QUALI, que permite el control de documentos de laboratorio y calidad.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Desarrollo de app (Android)",
        "Informacion": "Diciembre 2021 ",
        "fInicio": {
            "seconds": 1638748800,
            "nanoseconds": 0
        },
        "Comentarios": "Anatomía de una app, actividades, servicios, intenciones, proveedores de contenido, notificaciones, archivo manifiesto y sus elementos, clase activity, ciclos de las actividades, task, backStack, fragment, cliclo de vida y gestión, intent (a una actividad/servicio), tipo de intentos y transmisión de datos a otra app.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/Desarrollo%20de%20app.JPG?alt=media&token=eb01ae98-e235-4c5e-956b-5d44378a372b"
    },
    {
        "Nombre": "determinación de agua, humedad y pérdida por secado",
        "Informacion": "Octubre 2020",
        "fInicio": {
            "seconds": 1601510400,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en “determinación de agua, humedad y pérdida por secado: Conceptos y metrología”. Realizado por Dr. Iñon, Fernando.\nModalidad: Webinar\nDuración: 2hr\nFecha: 8 de Octubre 2020.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/certificado-determinacion-de-agua-humedad-y-perdida-por-secado-conceptos-y-metodologias%20(1).JPG?alt=media&token=9d94d300-45c6-4a13-b00d-b8d2be528f20"
    },
    {
        "Nombre": "Javascript Framework",
        "Informacion": "Noviembre 2021",
        "fInicio": {
            "seconds": 1633046400,
            "nanoseconds": 0
        },
        "Comentarios": "3 Modulos: trabajo con JS, crear una página de eventos, desarrollo con ReactJS, desarrollo con Vue. Trabajo final: desarrollo de página web con Vue + uso de servicios de googleMap",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/backend.jpg?alt=media&token=19fec90e-466f-4ccc-b0c6-cbbb42f937dc"
    },
    {
        "Nombre": "Curso Absorción atómica",
        "Informacion": "Junio 2013",
        "fInicio": {
            "seconds": 1370044800,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en espectroscopia de emisión y absorción atómica en Buenos Aires (colegiales) en la empresa JENK. Curso dictado los días 10, 11, 17 y 18 de junio de 2013 con una duración total de 32 hs. ",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Experiencia de usuario (Android)",
        "Informacion": "Enero 2022",
        "fInicio": {
            "seconds": 1641427200,
            "nanoseconds": 0
        },
        "Comentarios": "Material desing, colores y tematización, tipografias, patrones de diseño, estilos y temas (ligth, dark), elementos de dibujo, extender ondraw() y onMeasure(), dibujar formas, animaciones, transiciones y splashScreen.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/Experiencia%20de%20usuario.JPG?alt=media&token=60c66f36-b7e9-4052-a60b-5aa770abe55c"
    },
    {
        "Nombre": "Formación de auditores internos de sistema de gestión de calidad en laboratorios de ensayo y calibración",
        "Informacion": "Noviembre 2023",
        "fInicio": {
            "seconds": 1699527600,
            "nanoseconds": 489000000
        },
        "Comentarios": "Curso dictado por Sartorio, Cintia via Teams (2 dias). Código del curso SL-05 de IRAM",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/auditorinterno5.png?alt=media&token=597f5a90-fff3-42ba-aecb-85d110f1770e",
        "Categoria": "Calidad"
    },
    {
        "Nombre": "Expectativas de liderazgo Cargill",
        "Informacion": "Mayo 2017",
        "fInicio": {
            "seconds": 1493596800,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación dictada por: Gabriela Villafane – Global RH operations. Temas: Esquema de liderazgo, desarrollo de talentos, trabajo en equipo, inclusión laboral, manejo de datos, toma de decisiones, políticas de la empresa. Duración: 1hr30min",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Liderazgo"
    },
    {
        "Nombre": "Introducción a Microbiología",
        "Informacion": "Diciembre 2019",
        "fInicio": {
            "seconds": 1575158400,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de introducción a la microbiología, resolución 483/2019, dictado por Lic. Aristimuño, Bárbara.\nModalidad a distancia de la UTN Chaco – Resistencia.\nDuración 30hr.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/introduccion%20a%20microbiologia.JPG?alt=media&token=43ac47f3-8555-438e-9ab1-0102773a097a"
    },
    {
        "Nombre": "LIFE Cargill",
        "Informacion": "Agosto 2013",
        "fInicio": {
            "seconds": 1375315200,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación para la implementación del programa LIFE Cargil en la detección de precursores de lesiones serias y/o fatalidades dictados por el Ing. Ramas, Juan Pedro",
        "Categoria": "Seguridad",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Backend",
        "Informacion": "Octubre 2021",
        "fInicio": {
            "seconds": 1633046400,
            "nanoseconds": 0
        },
        "Comentarios": "4 Modulos: Introducción y manejo de NodeJS, introducción y manejo de Sails. Trabajo final: Construir un Backend con Sails a través del modelo vista controlador",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/backend.jpg?alt=media&token=625e710e-6e77-4807-a181-b651f429163f"
    },
    {
        "Nombre": "BPM (Buenas prácticas de manufactura)",
        "Informacion": "Enero 2020",
        "fInicio": {
            "seconds": 1577836800,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de Buenas prácticas de manufactura, resolución 140/2018, dictado por Lic. Bulffer, Romina.\nModalidad a distancia de la UTN Chaco – Resistencia.\nDuración 30hr.\nFecha de finalización: 26 Enero 2020",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/BPM.JPG?alt=media&token=570fa2fe-6e73-4f27-9430-7da19358b41b"
    },
    {
        "Nombre": "Control microbiológico de aguas",
        "Informacion": "Febrero 2020",
        "fInicio": {
            "seconds": 1580515200,
            "nanoseconds": 0
        },
        "Comentarios": "Curso de Control microbiológico de aguas, resolución 201/2019, dictado por Lic. Aristimuño, Bárbara.\nModalidad a distancia de la UTN Chaco – Resistencia.\nDuración 30hr.\nFecha de finalización: 20 Febrero 2020.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/Control%20microbiologico.JPG?alt=media&token=f66ef743-8f50-4698-943b-09384b2725fa"
    },
    {
        "Nombre": "Extracción sanguínea Neonatologia",
        "Informacion": "Marzo 2011",
        "fInicio": {
            "seconds": 1298937600,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en extracción para laboratorio de análisis clínico pediátrico y neonatología a cargo de: bioq. Luca, Marcelo y bioq. Jofre, Gerardo.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Gestión de laboratorio microbiológico",
        "Informacion": "Junio 2009",
        "fInicio": {
            "seconds": 1243814400,
            "nanoseconds": 0
        },
        "Comentarios": "Introducción al trabajo en laboratorio microbiológico, procedimientos, pruebas y ensayos a realizar, uso de equipamientos, toma de muestra, gestión de insumos y activos.",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Gestión de bases de datos",
        "Informacion": "Agosto 2021",
        "fInicio": {
            "seconds": 1627776000,
            "nanoseconds": 0
        },
        "Comentarios": "curso con 3 módulos: Introducción, bases de datos relacionales (MySql y PostgreSQL) y bases de datos no relacionales (REDIS y MongoDB). Trabajo final: Gestionar usuarios y esquemas de datos en PostgreSQL.",
        "Categoria": "Programacion",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/base%20de%20datos.jpg?alt=media&token=50d3195e-09f1-42cb-a252-d2af30d82e35"
    },
    {
        "Nombre": "Primeros auxilios",
        "Informacion": "Julio 2013",
        "fInicio": {
            "seconds": 1372636800,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación en primeros auxilios dictados por el Dr. Guzman, Alfredo",
        "Categoria": "Seguridad",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    },
    {
        "Nombre": "Diplomatura en gestión de laboratorio",
        "Informacion": "Marzo 2020",
        "fInicio": {
            "seconds": 1583020800,
            "nanoseconds": 0
        },
        "Comentarios": "Diplomado en gestión de laboratorio, resolución 484/2019, dictado por Lic. Aristimuño, Bàrbara y Lic. Bulffer, Romina.\nModalidad a distancia de la UTN Chaco-Resistencia.\nDuración 120hr.\nFecha finalización: 2 Marzo 2020",
        "Categoria": "Laboratorio",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diplomatura.JPG?alt=media&token=fac71fbb-d467-4a69-8b40-bcc630ab11cb"
    },
    {
        "Nombre": "Manejo de proyectos",
        "Informacion": "Abril 2017",
        "fInicio": {
            "seconds": 1491004800,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación Manejo de proyectos, dictado por: Ing. Elec. Cargill: Goldin, Leonardo (Especializado en: Marketing – Consultor de proyectos). Temas: Sponsors y gerentes de proyectos, etapas de gestión, inputs y outputs de cada etapa de proyecto, discutir gates review de cada etapa, trabajo en equipo, formación de un equipo, manejo de stakeholders, importancia de la comunicación (feedback), métodos de gestión del tiempo, cálculo de costos, preguntas importantes, gestión del cambio, cambio de visión, seguimientos de proyectos, procesos de control, normas internaciones de gestión de proyectos.  Duración: desde 25/4 al 28/4 año 2017 (30 hr.)",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8",
        "Categoria": "Proyecto"
    },
    {
        "Nombre": "Manejo de extintores",
        "Informacion": "Noviembre 2013",
        "fInicio": {
            "seconds": 1383264000,
            "nanoseconds": 0
        },
        "Comentarios": "Capacitación de uso y manejo de extintores de fuego por bomberos voluntarios de Venado tuerto",
        "Categoria": "Seguridad",
        "FotoDir": "https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/diploma.PNG?alt=media&token=23d563d2-cfa6-4d18-a1be-3b94c56de0a8"
    }
]
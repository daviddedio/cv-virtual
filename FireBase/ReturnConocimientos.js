import { getData } from './FireBaseConfig'

//export const datos = await getData("Conocimiento")
export const datosPrueba = [
    {
        "Categoria": "Computacion",
        "Nivel": "2",
        "Con": "SAP",
        "info": "PR5-Compras"
    },
    {
        "Con": "Cobas 6000",
        "Categoria": "Equipamiento",
        "Nivel": "3",
        "info": "Analsis hormonal"
    },
    {
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "Con": "Restch ZM200",
        "info": "Molino"
    },
    {
        "Con": "VBA",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Programacion hojs de Excel"
    },
    {
        "Con": "Ankom XT-15",
        "Categoria": "Equipamiento",
        "Nivel": "2",
        "info": "Determinacion de Fibra Alimentaria"
    },
    {
        "Con": "LECO fp680",
        "Categoria": "Equipamiento",
        "Nivel": "2",
        "info": "Determinacion de Nitrogeno (Proteina)"
    },
    {
        "Con": "Randox EI",
        "Categoria": "Equipamiento",
        "Nivel": "2",
        "info": "Determinacion Micotoxinas Inmuno Ensayo"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "3",
        "Con": "Bizagi (Flujogramas)",
        "info": "Emulador de flujogramas"
    },
    {
        "Con": "AA Shimadzu 1700",
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "info": "Determinacion de minerales"
    },
    {
        "Con": "PostgreSQL",
        "Categoria": "Computacion",
        "Nivel": "2",
        "info": "Base de datos relacional"
    },
    {
        "Con": "DigiPrep jr",
        "Categoria": "Equipamiento",
        "Nivel": "4",
        "info": "Mineralizacion de muestras"
    },
    {
        "Con": "PowerApps",
        "Categoria": "Computacion",
        "Nivel": "2",
        "info": "Desarrollo de aplicaciones basicas"
    },
    {
        "Con": "JQuery",
        "Nivel": "3",
        "Categoria": "Lenguaje",
        "info": "Bibloteca JavaScript"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "4",
        "Con": "WinLab (Lab Luca)",
        "info": "Procesamiento de datos Clinicos"
    },
    {
        "Con": "SQLServer",
        "Categoria": "Computacion",
        "Nivel": "3",
        "info": "Gestor de base de datos relacionales"
    },
    {
        "Con": "AccuScan Gold (Mico)",
        "Categoria": "Equipamiento",
        "Nivel": "4",
        "info": "Determinacion de micotoxinas por inmunocromatografia"
    },
    {
        "Con": "JavaScript",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Lenguaje de programacion para desarrollos web"
    },
    {
        "Con": "Stat-Fax 4700 (ELISA)",
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "info": "Determinacion de micotoxinas por ELISA"
    },
    {
        "Con": "Visual Studio",
        "Categoria": "Computacion",
        "Nivel": "3",
        "info": "IDE para desarrollo de software"
    },
    {
        "Con": "Bootstrap",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Framework de CSS"
    },
    {
        "Con": "C#",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Lenguaje de programacion"
    },
    {
        "Con": "Apache Couchdb",
        "Categoria": "Computacion",
        "Nivel": "1",
        "info": "Gestion de base de datos no relacionales"
    },
    {
        "Con": "Phyton",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Lenguaje de programacion"
    },
    {
        "Con": "Microsoft Visio",
        "Categoria": "Computacion",
        "Nivel": "4",
        "info": "Software para el desarrollo de flujogramas"
    },
    {
        "Con": "Visual Studio Code",
        "Categoria": "Computacion",
        "Nivel": "4",
        "info": "IDE para desarrollo web"
    },
    {
        "Con": "VueJS",
        "Nivel": "2",
        "Categoria": "Lenguaje",
        "info": "Framework de JS similar a REACT"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "4",
        "Con": "Microsoft Excel",
        "info": "Trabajo con hojas de calculo"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "3",
        "Con": "Microsoft Access",
        "info": "Gestor de base de datos locales"
    },
    {
        "Con": "HTML",
        "Categoria": "Lenguaje",
        "Nivel": "4",
        "info": "HyperText Markup Language"
    },
    {
        "Con": "MicroPipetas",
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "info": "manipulacion de pequeños volumenes de liquido"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "2",
        "Con": "GLims (Provimi)",
        "info": "Gestion de datos de laboratorio"
    },
    {
        "Con": "MySQL WorkBench",
        "Categoria": "Computacion",
        "Nivel": "1",
        "info": "Gestor de base de datos relacionales"
    },
    {
        "Con": "Sails",
        "Nivel": "2",
        "Categoria": "Lenguaje",
        "info": "Framework para Backend"
    },
    {
        "Con": "Android Studio",
        "Categoria": "Computacion",
        "Nivel": "3",
        "info": "IDE para desarrollo de apk android"
    },
    {
        "Con": "NodeJS",
        "Nivel": "2",
        "Categoria": "Lenguaje",
        "info": "Framework para Backend"
    },
    {
        "Con": "MiniVidas Biomerieux",
        "Categoria": "Equipamiento",
        "Nivel": "3",
        "info": "Determinacion de antigenos por inmunoflorescencia"
    },
    {
        "Con": "SQL",
        "Categoria": "Lenguaje",
        "Nivel": "4",
        "info": "Lenguaje de consulta a base de datos"
    },
    {
        "Categoria": "Computacion",
        "Con": "Microsoft Word",
        "Nivel": "4",
        "info": "Crear o editar documentos"
    },
    {
        "Con": "Power Bi",
        "Categoria": "Computacion",
        "Nivel": "2",
        "info": "Visualizacion de datos"
    },
    {
        "Categoria": "Equipamiento",
        "Nivel": "2",
        "Con": "Cobas e411",
        "info": "Determinacion de hormonas"
    },
    {
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "info": "Contador hematologico",
        "Con": "Sysmex XN-series"
    },
    {
        "Categoria": "Equipamiento",
        "Nivel": "4",
        "Con": "Shimadzu UV-V 1900",
        "info": "Espectrofotometro uv-visible"
    },
    {
        "Con": "ReactJS",
        "Categoria": "Lenguaje",
        "info": "Bibloteca de JavaScript",
        "Nivel": "3"
    },
    {
        "Con": "GDScript",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Lenguaje similar a Phyton para desarrollo de video juegos"
    },
    {
        "Con": "Genio - Electroforesis",
        "Categoria": "Equipamiento",
        "Nivel": "4",
        "info": "Determinacion de proteinas por electroforesis"
    },
    {
        "Categoria": "Computacion",
        "Nivel": "3",
        "Con": "Microsoft PowerPoint",
        "info": "Desarrollo de presentaciones"
    },
    {
        "Con": "CSS",
        "Categoria": "Lenguaje",
        "Nivel": "3",
        "info": "Hoja de estilo web"
    },
    {
        "Categoria": "Idioma",
        "Con": "Ingles (oral)",
        "Nivel": 2,
        "info": "Pre-intermedio"
    },
    {
        "Con": "Ankom 2000 (fibra cruda)",
        "Categoria": "Equipamiento",
        "Nivel": "3",
        "info": "Determinacion de fibra alimentaria"
    },
    {
        "Con": "Java",
        "Categoria": "Lenguaje",
        "Nivel": "2",
        "info": "Lenguaje de programacion multiplataforma"
    },
    {
        "Con": "Ingles (Escrito)",
        "Categoria": "Idioma",
        "Nivel": 2,
        "info": "Pre-intermedio"
    },
    {
        "Con": "Micropipeta electrónica",
        "Categoria": "Equipamiento",
        "Nivel": "5",
        "info": "Transferencia de volumenes con alta presicion"
    },
    {
        "Con": "WizZard (Shimadzu)",
        "Categoria": "Computacion",
        "Nivel": "4",
        "info": "Software conexion a Shimadzu"
    }
]
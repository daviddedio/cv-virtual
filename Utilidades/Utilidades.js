
export const cargarCat = (dato, funcion, atributo) => {
    const result = [];
    dato.forEach((item) => {
        if (!result.includes(item[atributo])) {
            result.push(item[atributo]);
        }
    })
    funcion(result)
}

export const handleFilter = (dato, arreglo, atributo, funcion) => {
    if (dato === "todo") {
        funcion(arreglo)
    } else {
        let temp = arreglo.filter((con) => con[atributo] === dato)
        funcion(temp)
    }
}

export const settear = (arreglo, datos )=>{arreglo.forEach(func => func(datos))}
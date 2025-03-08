import './GeneralTable.css'

export const GeneralTable = ({ data , title }) => {

    return (
        <div className='tableConteiner'>
            <h2 className='tituloTabla'>{title}</h2>
            <table>
                <tbody>
                    {Object.entries(data).map(([key, value], index) => (
                        <tr key={index} className="">
                            <td className="atributo">{key}:</td>
                            <td className="valor">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export const GeneralTableSkeleton = ({ title, count }) => {
    const arr = ['a','b','c','d','e']
    var i=0
    return (
        <div className='tableConteiner'>
            <h3 className='tituloTabla'>{title}</h3>
            <table>
                <tbody>
                    {
                        Array.from({ length: count }).map((it, index) =>
                                <tr key={'keyTable' + index.toString()} className="">
                                    <td className="satributo skeleton">Loading...</td>
                                    <td className="svalor skeleton"></td>
                                </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
}


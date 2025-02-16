import './GeneralTable.css'

export const GeneralTable = ({ data , title }) => {
    return (
        <div className='tableConteiner'>
            <h3 className='tituloTabla'>{title}</h3>
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


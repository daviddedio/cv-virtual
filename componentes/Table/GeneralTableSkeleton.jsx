import './GeneralTableSkeleton.css'

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
                                <tr key={index} className="">
                                    <td className="satributo skeleton">Loading...</td>
                                    <td className="svalor skeleton">{index}</td>
                                </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
}
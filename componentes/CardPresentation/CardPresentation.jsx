import './CardPresentation.css'

export const CardPresentation = ({nombre, nacionalidad, licencia, fecha, estado, presentacion, domicilio, telefono, correo}) => {
    return (
        <>
            <div className="pcard card" data-state="#about">
                <div className="pcard-header">
                    <div className="pcard-cover">
                    </div>
                    <img className="pcard-avatar"
                        src="https://media.licdn.com/dms/image/v2/C4D03AQE_LBZZGaTIjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1524490233489?e=1744848000&v=beta&t=HBLUMzvA70WgAOHynJDLNEM5Pv3-rgJvQ7xnKrHAR4w"
                        alt="avatar" />
                    <h1 className="pcard-fullname">{nombre}</h1>
                    <h2 className="pcard-jobtitle">Lic. En tecnologia alimentaria</h2>
                </div>
                <div className="pcard-main">
                    <div className="pcard-section is-active" id="about">
                        <div className="pcard-content">
                            <h3 className="pcard-subtitle">Presentacion</h3>
                            <p className="pcard-desc">{presentacion}
                            </p>
                            <h3>Datos personales:</h3>
                            <ul className="ulInfo">
                                <li><span>Domicilio:</span> {domicilio}</li>
                                <li><span>Nacionalidad:</span> {nacionalidad}</li>
                                <li><span>Licencia de conducir:</span> {licencia}</li>
                                <li><span>Fecha de Nacimiento:</span> {fecha}</li>
                                <li><span>Estado Civil:</span> {estado}</li>
                                <li><span>Telefono:</span> {telefono} </li>
                                <li><span>E-mail:</span> {correo} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CardPresentationSkeleton = () => {
    return (
        <>
            <div className="pcard skeleton" data-state="#about">
                <div className="pcard-header skeleton">
                    <div className="pcard-cover skeleton">
                    </div>
                    <img className="pcard-avatar"
                        src="https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/vacio.jpg?alt=media&token=b6fc219c-982c-4fbd-bf30-52b9670fe519"
                        alt="avatar" />
                    <h1 className="pcard-fullname">Loading...</h1>
                    <h2 className="pcard-jobtitle">Loading...</h2>
                </div>
                <div className="pcard-main skeleton">
                    <div className="pcard-section is-active" id="about">
                        <div className="pcard-content">
                            <h3 className="pcard-subtitle">Presentacion</h3>
                            <p className="pcard-desc">Loading...
                            </p>
                            <h3>Datos personales:</h3>
                            <ul className="ulInfo">
                                <li><span>Domicilio:</span> Loading...</li>
                                <li><span>Nacionalidad:</span> Loading...</li>
                                <li><span>Licencia de conducir:</span> Loading...</li>
                                <li><span>Fecha de Nacimiento:</span> Loading...</li>
                                <li><span>Estado Civil:</span> Loading...</li>
                                <li><span>Telefono:</span> Loading... </li>
                                <li><span>E-mail:</span> Loading... </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
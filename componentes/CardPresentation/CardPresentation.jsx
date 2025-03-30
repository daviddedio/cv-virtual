import './CardPresentation.css'

export const CardPresentation = ({nombre, nacionalidad, licencia, fecha, estado}) => {
    return (
        <>
            <div className="pcard" data-state="#about">
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
                            <div className="pcard-subtitle">Presentacion</div>
                            <p className="pcard-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia
                                readymade schlitz brooklyn disrupt.
                            </p>
                            <ul>
                                <li>Nacionalidad: {nacionalidad}</li>
                                <li>Licencia de conducir: {licencia}</li>
                                <li>Fecha de Nacimiento: {fecha}</li>
                                <li>Estado Civil: {estado}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
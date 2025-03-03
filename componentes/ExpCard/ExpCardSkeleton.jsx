import './ExpCardSkeleton.css'

export const ExpCardSkeleton = ({clave}) => {
    return (
        <div className="exptCard " key={clave}>
            <div className="expHeader">
                <div className='sECimgConteiner skeleton'>
                    <img className='skeleton-box-img skeleton' src='../../src/assets/circleSpinnWhite.svg' />
                </div>
                <div className='sECdataConteiner skeleton'>
                    <h2 className='skeleton-title skeleton'>Loading...</h2>
                    <h3 className='.skeleton-subtitle skeleton'>Loading...</h3>
                    <p className='skeleton-text skeleton'>Loading...</p>
                </div>
            </div>
            <div className="cardBody">
                <p className=' skeleton-text skeleton'><i className="fa-solid fa-arrow-right" /> Loding...</p>
            </div>
        </div>
    )
}
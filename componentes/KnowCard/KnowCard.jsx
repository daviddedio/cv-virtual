import './KnowCard.css'
import { HalfRating } from '../Rating/Rating'
export const KnowCard = ({ con, nivel, info }) => {
    return (
        <div className='knowCardConteinter'>
            <h3>{con}</h3>
            <p>{info}</p>
            <div className="ratingConteiner">
                <HalfRating puntos={nivel} />
            </div>
        </div>
    )
}

export const KnowCardSkeleton = () => {
    return (
        <div className='knowCardConteinters skeleton'>
            <h3></h3>
            <p></p>
            <div className="ratingConteiners skeleton">
                <HalfRating puntos={0} />
            </div>
        </div>
    )
}

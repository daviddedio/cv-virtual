import './KnowCard.css'
import { HalfRating } from '../Rating/Rating'
export const KnowCard = ({ con, nivel, info }) => {
    return (
        <div className="kflip-card">
            <div className="kflip-card-inner">
                <div className="kflip-card-front">
                    <h2>{con}</h2>
                    <div className="ratingConteiner">
                        <HalfRating puntos={nivel} />
                    </div>
                </div>
                <div className="kflip-card-back">
                    <h4>Informacion</h4>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    )
}

export const KnowCardSkeleton = () => {
    return (
<div className="kflip-card skeleton">
            <div className="kflip-card-inner ">
                <div className="kflip-card-front">
                    <h2>Loading..</h2>
                    <div className="ratingConteiner skeleton">
                        <HalfRating puntos={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}

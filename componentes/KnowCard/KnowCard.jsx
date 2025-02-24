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
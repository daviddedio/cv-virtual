import './KnowCardSkeleton.css'
import { HalfRating } from '../Rating/Rating'
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
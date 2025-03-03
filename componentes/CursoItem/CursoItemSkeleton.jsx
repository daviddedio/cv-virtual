import './CursoItemSkeleton.css'
export const CursoItemSkeleton = ({clase}) => {
    console.log(clase)
    return (
    <div className="cursoConteiner">
        <div className={clase}>Loading...</div>
    </div>
    )
}
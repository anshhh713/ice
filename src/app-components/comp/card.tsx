import './card.css'


type CardProps = {
    title: string
    desc: string
}

const Card = ({title, desc}: CardProps) => {
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <img src="#" alt="card-photo" />
                </div>
                <div className="card-label">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
export default Card
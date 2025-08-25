import './card.css'
import type { FC } from 'react'

type CardProps = {
    title: string
    desc: string
}

const Card: FC<CardProps> = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <img src="#" alt="card-photo" />
                </div>
                <div className="card-label">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}
export default Card
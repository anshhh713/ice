import './card-holder.css'
import CardT2 from './l1/card'

type CardProps = {
    title: string
    rank: string
    imageSrc: string
    imageAlt: string
}

type CardHoldProps = {
    card: CardProps[]
    heading: string
}

type CardHolderT2Props = {
    card: CardHoldProps[]
}

const CardHolderT2 = ({ card }: CardHolderT2Props) => {
    return (
        <div className="card-holder-t2">
            {card.map((c, idx) => (
                <div className='card-group-t2' key={idx}>
                    <h3 className="heading-t2">{c.heading}</h3>
                    <div className="card-bunch-t2">
                        {c.card.map((cc, index) => (
                            <CardT2
                                key={index}
                                title={cc.title}
                                imageSrc={cc.imageSrc}
                                imageAlt={cc.imageAlt}
                                rank={cc.rank}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardHolderT2

import './card-holder.css'

import CardT1 from '../t1/l1/card'

type CardHolderT1Props = {
    card: {
    filter: string,
    card: {
        title: string;
        imageSrc: string;
        imageAlt: string;
        rank: number;
    }[] | null}[];
}

const CardHolderT1 = ({card}: CardHolderT1Props) => {
    return(
        <div className="card-holder-t1">
            {card?.map((c, idx) => (
                <div className='card-group-t1' key={idx}>
                    <h3 className="heading-t1">{c?.filter}</h3>
                    <div className="card-bunch-t1">
                        {c.card?.map((cc, index) => (
                            <CardT1
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
export default CardHolderT1
import './card.css'
import Image from 'next/image'

type CardT1Props = {
    title: string;
    imageSrc: string;
    imageAlt: string;
    rank: number;
}

const CardT1 = ({ title, imageSrc, imageAlt, rank }: CardT1Props) => {
    return (
        <div className="card-t1" data-rank={rank}>
            <div className="card-photo-t1">
            <Image className="image-t1" src={imageSrc} alt={imageAlt} width={800} height={800}  />
            </div>
            <div className="card-label-t1">
                <div className="title-t1">{title}</div>
            </div>
        </div>
    )
}
export default CardT1;
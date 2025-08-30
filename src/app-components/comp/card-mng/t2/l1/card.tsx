import './card.css'
import Image from 'next/image'

type CardProps = {
    title: string
    rank:string
    image:string
    imageAlt:string
}

const CardT2 = ({title, rank, image, imageAlt}: CardProps) => {
    return (
        <>
            <div className="card-t2">
                <div className="card-label">
                    <h3>{rank}</h3>
                    <h3 className='title'>{title}</h3>
                    
                </div>
                <div className="card-photo-t2">
                    <Image className='image' src={image} alt={imageAlt} width={225} height={225} />
                </div>
            </div>
        </>
    )
}
export default CardT2
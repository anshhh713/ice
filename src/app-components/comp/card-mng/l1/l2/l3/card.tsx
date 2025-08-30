import './card.css'
import Image from 'next/image'

type CardProps = {
    title: string
    desc: string
    image:string
    imageAlt:string
}

const Card = ({title, desc, image, imageAlt}: CardProps) => {
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <Image className='image' src={image} alt={imageAlt} width={100} height={300} />
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
import "./card.css";
import Image from "next/image";

type CardProps = {
  title: string;
  rank: string;
  imageSrc: string;
  imageAlt: string;
};

const CardT2 = ({ title, rank, imageSrc, imageAlt }: CardProps) => {
  
  return (
    <>
      <div className="card-t2">
        <div className="card-label-t2">
          <h3 className="rank-t2">{rank}</h3>
          <h3 className="title-t2">{title}</h3>
        </div>
        <div className="card-photo-t2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            
            width={436}
            height={745}
            className="image-t2"
          />
        </div>
      </div>
    </>
  );
};
export default CardT2;

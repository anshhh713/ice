import './card-holder.css';
import CardT2 from './l1/card';

type CardProps = {
  title: string;
  rank: string;
  imageSrc: string;
  imageAlt: string;
};

type CardGroupProps = {
  cards: CardProps[];
  heading: string;
};

type CardHolderT2Props = {
  groups: CardGroupProps[];
};

const CardHolderT2 = ({ groups }: CardHolderT2Props) => {
  return (
    <div className="card-holder-t2">
      {groups.map((group, idx) => (
        <div className="card-group-t2" key={idx}>
          <h3 className="heading-t2">{group.heading}</h3>
          <div className="card-bunch-t2">
            {group?.cards.map((card, index) => (
              <CardT2
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                rank={card.rank}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHolderT2;

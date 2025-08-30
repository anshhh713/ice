import "./card-holder.css";

import Card from "./l3/card";
type CardHolderProps = {
  cards: { title: string; desc: string; image: string; imageAlt: string }[];
};
const CardHolder = ({ cards }: CardHolderProps) => {
  return (
    <div className="card-holder">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          desc={card.desc}
          image={card.image}
          imageAlt={card.imageAlt}
        />
      ))}
    </div>
  );
};
export default CardHolder;

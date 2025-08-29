import "./card-holder.css";

import Card from "./card";
type CardHolderProps = {
  cards: { title: string; desc: string }[];
};
const CardHolder = ({ cards }: CardHolderProps) => {
  return (
    <div className="card-holder">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} desc={card.desc} />
      ))}
    </div>
  );
};
export default CardHolder;

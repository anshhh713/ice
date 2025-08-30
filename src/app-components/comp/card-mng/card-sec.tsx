import "./card-sec.css";
import CardCategory from "./l1/card-category";

type Card = {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
};

type Category = {
  filter: string; // e.g. "Popular", "Ongoing"
  cards: Card[];
};

type CardSecProps = {
  categories: Category[];
};

const CardSec = ({ categories }: CardSecProps) => {
  return (
    <div className="card-sec">
      {categories.map((category, idx) => (
        <CardCategory
          key={idx}
          filter={category.filter}
          cards={category.cards}
        />
      ))}
    </div>
  );
};

export default CardSec;

import "./card-category.css";
import CardHolder from "./l2/card-holder";
type CardCategoryProps = {
  cards: { title: string; desc: string; image: string; imageAlt: string }[];
  filter: string;
};

const CardCategory = ({ filter, cards }: CardCategoryProps) => {
  return (
    <>
      <h3 className="card-sec-title">{filter}</h3>
      <CardHolder cards={cards} />
    </>
  );
};
export default CardCategory;

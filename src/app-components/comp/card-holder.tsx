import "./card-holder.css";

import Card from "./card";

const CardHolder = () => {
  return (
    <div className="card-holder">
      <Card title="Card1" desc="desc1" />
      <Card title="Card2" desc="desc2" />
      <Card title="Card3" desc="desc3" />
      <Card title="Card4" desc="desc4" />
      <Card title="Card5" desc="desc5" />
    </div>
  );
};
export default CardHolder;

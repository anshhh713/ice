import "./alt1.css";
import CardHolderT2 from "@/app-components/comp/card-mng/t2/card-holder";

const Alt1 = () => {
  return (
    <>
      <div className="alt1">
        <CardHolderT2 card={[
          { heading: "Trending",
            card:[
              {
                title: "One Piece",
                image: "/jhoncena.jpg",
                rank: "01",
                imageAlt: "John Cena",

              }
            ]
          }
        ]} /> 
        
        
      </div>
    </>
  );
};
export default Alt1;

import "./alt1.css";
import CardHolderT2 from "@/app-components/comp/card-mng/t2/card-holder";

const Alt1 = () => {
  return (
    <>
      <div className="alt1">
        <CardHolderT2 groups={[
          { heading: "Trending",
            cards:[
              {
                title: "One Piece",
                imageSrc: "/luffy.jpg",
                rank: "01",
                imageAlt: "Luffy",

              },
              {
                title: "Naruto",
                imageSrc: "/naruto.jpg",
                rank: "02",
                imageAlt: "Naruto Uzumaki",

              },
              {
                title: "Dragon Ball Z",
                imageSrc: "/dragon_ball_z.jpg",
                rank: "03",
                imageAlt: "Dragon Ball Z",
              },
              {
                title: "Attack on Titan",
                imageSrc: "/attack_on_titan.jpg",
                rank: "04",
                imageAlt: "Attack on Titan",
              },
              {
                title: "One Piece",
                imageSrc: "/luffy.jpg",
                rank: "01",
                imageAlt: "Luffy",

              },
              {
                title: "Naruto",
                imageSrc: "/naruto.jpg",
                rank: "02",
                imageAlt: "Naruto Uzumaki",

              },
              {
                title: "Dragon Ball Z",
                imageSrc: "/dragon_ball_z.jpg",
                rank: "03",
                imageAlt: "Dragon Ball Z",
              },
              {
                title: "Attack on Titan",
                imageSrc: "/attack_on_titan.jpg",
                rank: "04",
                imageAlt: "Attack on Titan",
              }
            ]
          }
        ]} /> 
        
        
      </div>
    </>
  );
};
export default Alt1;

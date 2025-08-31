import "./main-content.css";
import Alt1 from "../alt1/alt1";
import CardHolderT1 from "@/app-components/comp/card-mng/t1/card-holder";
import SideContent from "../side-content/side-content";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="p1">
        <Alt1 />
      </div>
      <div className="p2">
        <CardHolderT1
          card={[
            {
              filter: "Popular",
              card: [
                {
                  title: "One Piece",
                  imageSrc: "/luffy.jpg",
                  imageAlt: "Luffy",
                  rank: 1,
                },
                {
                  title: "Naruto",
                  imageSrc: "/naruto.jpg",
                  imageAlt: "Naruto Uzumaki",
                  rank: 2,
                },
                {
                  title: "Dragon Ball Z",
                  imageSrc: "/dragon_ball_z.jpg",
                  imageAlt: "Dragon Ball Z",
                  rank: 3,
                },
                {
                  title: "Attack on Titan",
                  imageSrc: "/attack_on_titan.jpg",
                  imageAlt: "Attack on Titan",
                  rank: 4,
                },
              ],
            },
            {
              filter: "Popular",
              card: [
                {
                  title: "One Piece",
                  imageSrc: "/luffy.jpg",
                  imageAlt: "Luffy",
                  rank: 1,
                },
                {
                  title: "Naruto",
                  imageSrc: "/naruto.jpg",
                  imageAlt: "Naruto Uzumaki",
                  rank: 2,
                },
                {
                  title: "Dragon Ball Z",
                  imageSrc: "/dragon_ball_z.jpg",
                  imageAlt: "Dragon Ball Z",
                  rank: 3,
                },
                {
                  title: "Attack on Titan",
                  imageSrc: "/attack_on_titan.jpg",
                  imageAlt: "Attack on Titan",
                  rank: 4,
                },
              ],
            },
            {
              filter: "Popular",
              card: [
                {
                  title: "One Piece",
                  imageSrc: "/luffy.jpg",
                  imageAlt: "Luffy",
                  rank: 1,
                },
                {
                  title: "Naruto",
                  imageSrc: "/naruto.jpg",
                  imageAlt: "Naruto Uzumaki",
                  rank: 2,
                },
                {
                  title: "Dragon Ball Z",
                  imageSrc: "/dragon_ball_z.jpg",
                  imageAlt: "Dragon Ball Z",
                  rank: 3,
                },
                {
                  title: "Attack on Titan",
                  imageSrc: "/attack_on_titan.jpg",
                  imageAlt: "Attack on Titan",
                  rank: 4,
                },
              ],
            },
          ]}
        />
      <SideContent />
      </div>
    </div>
  );
};

export default MainContent;

import "./main-content.css";

import CardSec from "@/app-components/comp/card-mng/t1/card-sec";
import SideContent from "../side-content/side-content";

const MainContent = () => {
  return (
    <div className="main-content">
            <CardSec
        categories={[
          {
            filter: "Popular",
            cards: [
              {
                title: "Card 1",
                desc: "First",
                image: "/jhoncena.jpg",
                imageAlt: "one",
              },
              {
                title: "Card 2",
                desc: "Second",
                image: "/jhoncena.jpg",
                imageAlt: "two",
              },
            ],
          },
          {
            filter: "Ongoing",
            cards: [
              {
                title: "Card 3",
                desc: "Third",
                image: "/jhoncena.jpg",
                imageAlt: "three",
              },
            ],
          },
          {
            filter: "Trending",
            cards: [
              {
                title: "Card 4",
                desc: "Fourth",
                image: "/jhoncena.jpg",
                imageAlt: "four",
              },
              {
                title: "Card 5",
                desc: "Fifth",
                image: "/jhoncena.jpg",
                imageAlt: "five",
              },
            ],
          },
        ]}
      />

      <SideContent  />
    </div>
  );
};

export default MainContent;

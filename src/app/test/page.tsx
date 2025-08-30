import Card from "@/app-components/comp/card-mng/t1/l1/l2/l3/card"
import CardHolder from "@/app-components/comp/card-mng/t1/l1/l2/card-holder"
import CardCategory from "@/app-components/comp/card-mng/t1/l1/card-category"
import CardSec from "@/app-components/comp/card-mng/t1/card-sec"
export default function Test(){
    return (
        <CardSec categories={[
            { filter: "all", cards: [
                {
                title: "One Piece",
                image: "/jhoncena.jpg",
                imageAlt: "John Cena",
                desc: "The story of Monkey",
        },
        {
            title: "Naruto",
            image: "/jhoncena.jpg",
            imageAlt: "Naruto Uzumaki",
            desc: "The story of Naruto",
        },]
    }
        ]} />
    )}
    
    
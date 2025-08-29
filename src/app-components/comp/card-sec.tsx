import './card-sec.css'

import CardHolder from './card-holder'
const CardSec = () => {
    return (
        <div className="card-sec">
            <h3 className="card-sec-title">Ongoing</h3>
            <CardHolder 
            cards={[
                { title: "Card1", desc: "desc1" },
                { title: "Card2", desc: "desc2" },
                { title: "Card3", desc: "desc3" },
                { title: "Card4", desc: "desc4" },
                { title: "Card5", desc: "desc5" },
            ]} />
            <h3 className="card-sec-title">Ongoing</h3>
            <CardHolder 
            cards={[
                { title: "Card1", desc: "desc1" },
                { title: "Card2", desc: "desc2" },
                { title: "Card3", desc: "desc3" },
                { title: "Card4", desc: "desc4" },
                { title: "Card5", desc: "desc5" },
            ]} />
            
        </div>
    )
}
export default CardSec
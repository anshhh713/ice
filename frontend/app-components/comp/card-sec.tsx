import './card-sec.css'
import type { FC } from 'react'
import CardHolder from './card-holder'
const CardSec: FC = () => {
    return (
        <div className="card-sec">
            <h3 className="card-sec-title">Ongoing</h3>
            <CardHolder />
        </div>
    )
}
export default CardSec
import './main-content.css'
import type { FC } from 'react'
import CardSec from '../comp/card-sec'
import SideContent from './side-content'
const MainContent: FC = () => {
    return (
        <div className="main-content">
            <CardSec />
            <SideContent  title='Categories'/>
        </div>
    )
}

export default MainContent
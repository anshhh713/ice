import './tags.css'
import type { FC } from 'react'

type TagsProps = {
    title: string
    count: number
}
const Tags: FC<TagsProps> = (props) => {
    return (
        <div className="tags">
            <h4>{props.title}</h4>
            <h4 id='d'>{props.count}</h4>
        </div>
    )
}
export default Tags
import './category.css'
import type { FC } from 'react'

type CategoryProps = {
    title: string
    count: number
}
const Category: FC<CategoryProps> = (props) => {
    return (
        <div className="category">
            <h4>{props.title}</h4>
            <h4 id='d'>{props.count}</h4>
        </div>
    )
}
export default Category
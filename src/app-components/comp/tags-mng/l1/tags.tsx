import './tags.css'


type TagsProps = {
    title: string
    count: number
}
const Tags= ({title, count}: TagsProps) => {
    return (
        <div className="tags">
            <h4 id='t'>{title}</h4>
            <h4 id='d'>{count}</h4>
        </div>
    )
}
export default Tags
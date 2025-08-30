import "./tag-sec.css";
import Tags from "./l1/tags";

type TagsProps = {
  title: string;
  count: number;
};

type Tagsl1 = {
  tagheading: string;
  tag: TagsProps[];
};

type TagSecProps = {
  tag: Tagsl1[];
};

const TagSec = ({ tag }: TagSecProps) => {
  return (
    <>
      {tag.map((group, idx) => (
        <div key={idx}>
          <div className="heading">
            <h3>{group.tagheading}</h3>
          </div>
          <div className="tag-sec">
            {group.tag.map((t, index) => (
              <Tags key={index} title={t.title} count={t.count} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TagSec;

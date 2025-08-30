import "./side-content.css";

import TagSec from "@/app-components/comp/tags-mng/tag-sec";
type SideContentProps = {
  title: string;
};
const SideContent = () => {
  return (
    <div className="side-content">
      <div className="cat-box">
        <TagSec
          tag={[
            {
              tagheading: "Tags",
              tag: [
                { title: "Action", count: 1 },
                { title: "Adventure", count: 2 },
                { title: "Cars", count: 3 },
                { title: "Comedy", count: 4 },
                { title: "Demon", count: 5 },
                
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
export default SideContent;

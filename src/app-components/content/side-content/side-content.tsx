import "./side-content.css";
import type { FC } from "react";
import Tags from "../../comp/tags";
type SideContentProps = {
  title: string;
};
const SideContent: FC<SideContentProps> = (props) => {
  return (
    <div className="side-content">
      <div className="heading">
        <h3>{props.title}</h3>
      </div>
      <div className="cat-box">
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"hello"} count={1} />
        <Tags title={"ahegao"} count={90} />
      </div>
    </div>
  );
};
export default SideContent;

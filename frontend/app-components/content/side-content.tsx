import "./side-content.css";
import type { FC } from "react";
import Category from "./category";
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
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"hello"} count={1} />
        <Category title={"ahegao"} count={90} />
      </div>
    </div>
  );
};
export default SideContent;

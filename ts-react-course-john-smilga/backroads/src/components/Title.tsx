import { TitleTypeProps } from "../types/type";

function Title( props :TitleTypeProps) {
  return (
    <div className="section-title">
      <h2>
        {props.content.title + " "} 
        <span>{props.content.subTitle}</span>
      </h2>
    </div>
  )
}

export default Title;

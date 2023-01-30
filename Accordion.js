import React, { useState, useRef } from "react";
import "./styles.css";

export default function Accordion(props) {

  const [height, setHeight] = useState("0px"); //Based on height of content we will change arrow direction and change content display
  const [arrow, setArrow] = useState("sarrow");
  const [active, setActive] = useState("accrdion");
  //To get hiehgt of the content
  let content = useRef(null);

  function toggleContent() {
    //getting height of content div
    setHeight(height === "0px" ? `${content.current.scrollHeight}px` : "0px");
    setArrow(height === "0px" ? "darrow" : "sarrow");
    setActive(height === "0px" ? "accrdion active" : "accrdion");
  }

  return (
    <div className="accrdion_section">
      <button className={active} onClick={toggleContent}> 
        <p>{props.title}</p>
        <span className={arrow}></span>
      </button>
      <div
        ref={content} //refernce to this div
        style={{ maxHeight: `${height}` }} //JSXx inline style to change height
        className="accordion_content"
      >
        {props.content}
      </div> 
    </div>
  );
}

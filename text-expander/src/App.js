import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({children ,collapsedNumWords=30 , expandButtonText='Show more',  collapseButtonText='show less',  buttonColor='blue'}) {
  const [expanded, setExpanded]= useState(false)
  const buttonStyle = {
    backgroundColor: buttonColor,
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  };
  const splitText = children.split(" ");
  const firstHalf= splitText.slice(0,collapsedNumWords).join(" ");
  const secondHalf=splitText.length > collapsedNumWords ? splitText.slice(collapsedNumWords,).join(" ") : ''
 function handleExpand(){
  setExpanded(!expanded)
 }
  return (
    <p>
     {firstHalf}

          {expanded?<><button style={buttonStyle} onClick={handleExpand}>{collapseButtonText}</button> <br/>  {secondHalf}</> :<><button style={buttonStyle} onClick={handleExpand}>...{expandButtonText} {''}</button></>}
                    

    </p>
  )
}
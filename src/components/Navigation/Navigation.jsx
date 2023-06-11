import React, { useRef, useState } from "react";
import NavigationTab from "./NavigationTab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Navigation() {
  const scrollRef = useRef(0);
  const [scrollValue, setScrollValue] = useState(0)

  function Slide(direction) {
    let scroll = 0;
    var slide = setInterval(() => {
      if (direction === "Left") {
        scrollRef.current.scrollLeft -= 10;
        setScrollValue(prev => prev-10)
      } else if(direction === 'Right') {
        scrollRef.current.scrollLeft += 10;
        setScrollValue(prev => prev+10)
      } else {
        setScrollValue(scrollRef.current.scrollLeft)
      }
      scroll += 10;
      if (scroll >= 250) window.clearInterval(slide);
    }, 20);
  }



  return (
    <>
      <div
        className="left-nav-button nav-button"
        tabIndex={0}
        onClick={() => Slide("Left")}
        style={{ display: scrollValue===0 ? 'none': 'block'}}
      >
        <ArrowBackIosIcon />
      </div>
      <div className="navigation-outer" ref={scrollRef} onScroll={(e)=>Slide(e)}>
        <div className="navigation">
          <NavigationTab active={true} text="All" />
          <NavigationTab text="Gaming" />
          <NavigationTab text="Live" />
          <NavigationTab text="Valorant" />
          <NavigationTab text="Podcasts" />
          <NavigationTab text="Comedy" />
          <NavigationTab text="Puzzle" />
          <NavigationTab text="Trailers" />
          <NavigationTab text="JavaScript" />
          <NavigationTab text="History" />
          <NavigationTab text="Gadgets" />
          <NavigationTab text="Indie Games" />
          <NavigationTab text="Action-Adventure" />
          <NavigationTab text="Science" />
          <NavigationTab text="Dogs" />
          <NavigationTab text="Cars" />
          <NavigationTab text="Watched" />
          <NavigationTab text="New to You" />
        </div>
      </div>
      <div
        className="right-nav-button nav-button"
        tabIndex={0}
        onClick={() => Slide("Right")}
        style={{ display: scrollValue>(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)-10 ? 'none' : 'block'}}
      >
        <ArrowForwardIosIcon />
      </div>
    </>
  );
}

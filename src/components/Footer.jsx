import { Link } from "react-router-dom";
import data from "../Data/extended_location_data.json";
import React, { useRef, useState } from "react";

const Footer = () => {

  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="footer-wrapper">
      {/* {Object.keys(data).map((stateName) => (
        <div key={stateName}>
          <h2>{stateName}</h2>
        </div>
      ))} */}

      <div className="alphbed-numbers-list">
        <div className="left-area-lable">
          <span>States</span>
        </div>
      
        <div className="right-area-lable">
        <div
      className="scroll-container-two-line"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
          <ul className="">
            {Object.keys(data).map((stateName) => (
              <li key={stateName} className="card-two-line" >
                <Link to={`/state/${stateName}`} >{stateName}</Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

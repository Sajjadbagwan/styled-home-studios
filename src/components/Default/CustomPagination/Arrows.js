import React from "react";

const Arrows = ({ nextSlide, prevSlide }) => {
  return (
    <div className="custom-arrows">
      <button className="prev-arrow" onClick={prevSlide} aria-label="prev">
        {"◁"}
      </button>
      <button className="next-arrow" onClick={nextSlide} aria-label="next">
        {"▷"}
      </button>
    </div>
  );
};

export default Arrows;

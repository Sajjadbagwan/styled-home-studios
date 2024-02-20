import React from "react";

const Arrows = ({ nextSlide, prevSlide }) => {
  return (
    <div className="custom-arrows">
      <button className="prev-arrow" onClick={prevSlide}>
        {"◁"}
      </button>
      <button className="next-arrow" onClick={nextSlide}>
        {"▷"}
      </button>
    </div>
  );
};

export default Arrows;

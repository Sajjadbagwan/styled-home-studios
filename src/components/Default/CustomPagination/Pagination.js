import React from "react";

const Pagination = ({ slides, activeSlide, handleClick }) => {
  return (
    <ul className="custom-pagination">
      {slides.map((slide, index) => (
        <li
          key={index}
          className={`pagination-item ${activeSlide === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

'use client';

import React, { useEffect, useRef, useState } from "react";

// Import company logos
import logo1 from "../AAPM.png";
import logo2 from "../Untitled-2.png";
import logo3 from "../Untitled-3.png";
import logo4 from "../Untitled-4.png";
import logo5 from "../Untitled-5.png";
import logo6 from "../Untitled-6.png";
import logo7 from "../Untitled-10.png";
import logo8 from "../Untitled-8.png";
import logo9 from "../Untitled-9.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current && !isDragging) {
        carouselRef.current.scrollLeft += 1;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap scroll-smooth"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: "none" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-35 h-auto flex items-center justify-center shrink-0 hover:scale-110 duration-300">
              <img src={logo} alt={`Company logo ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
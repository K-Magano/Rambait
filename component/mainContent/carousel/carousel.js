import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function ResponsiveCarousel() {
  return (
    <Carousel>
      <div>
        <Image
          src="/../images/carousel/recycle2.jpg"
          alt="recycling "
          width={150}
          height={200}
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image
          src="/../images/carousel/recycle3.jpg"
          alt="recycling "
          width={150}
          height={200}
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Image
          src="/../images/carousel/recycle4.jpeg"
          alt="recycling "
          width={150}
          height={200}
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <Image
          src="/../images/carousel/recycle5.jpg"
          alt="recycling "
          width={150}
          height={200}
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ResponsiveCarousel;

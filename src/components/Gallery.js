import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Gallery.css";

const images = [
  "image1.jpeg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpeg",
  "image5.webp",
  "image6.jpg",
  "image7.jpg",
  "image8.jpeg",
  "image9.jpg",
  "image10.jpeg",
];

const Gallery = () => {
  return (
    <div className="gallery fadeIn">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <LazyLoadImage
              src={src}
              alt={`Gallery Image ${index + 1}`}
              effect="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

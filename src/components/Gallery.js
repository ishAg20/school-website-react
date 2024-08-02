import React from "react";
import "./Gallery.css";

const images = [
  "https://theheritageschool.org/images/new-gallery/post%201%20(2)-min.jpg",
  "https://theheritageschool.org/gallery.php#images1-5",
  "https://theheritageschool.org/gallery.php#images2-5",
  "https://theheritageschool.org/gallery.php#images3-4",
  "https://theheritageschool.org/gallery.php#images6-4",
  "https://theheritageschool.org/gallery.php#images5-5",
  "https://theheritageschool.org/gallery.php#images6-5",
];

const Gallery = () => {
  return (
    <div className="gallery fadeIn">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

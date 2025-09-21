import React from "react";

export default function Gallery({ images }) {
  return (
    <section id="gallery" className="px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Haircut"
            className="rounded-xl shadow-md"
          />
        ))}
      </div>
    </section>
  );
}

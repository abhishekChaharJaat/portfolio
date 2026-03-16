"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

const certificateData = [
  { id: 1, src: "/gallery/ach1.jpg" },
  { id: 2, src: "/gallery/ach2.jpg" },
  { id: 3, src: "/gallery/ach3.jpg" },
  { id: 4, src: "/gallery/ach4.jpg" },
  { id: 5, src: "/gallery/ach5.jpg" },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-3 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-[#13866F]/90 text-white rounded-full hover:bg-[#0f5a4c] shadow-md transition"
    aria-label="Next"
  >
    <FaChevronRight size={14} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-3 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-[#13866F]/90 text-white rounded-full hover:bg-[#0f5a4c] shadow-md transition"
    aria-label="Previous"
  >
    <FaChevronLeft size={14} />
  </button>
);

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Gallery</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
          <p className="mt-4 text-[#5a7a82] text-base">
            Certificates &amp; achievements
          </p>
        </div>

        <div className="bg-[#F0FAF7] rounded-2xl py-8 px-4 sm:px-8 relative">
          <Slider {...settings}>
            {certificateData.map((cert) => (
              <div key={cert.id} className="px-3">
                <div
                  className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(cert.src)}
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={cert.src}
                      alt="Certificate"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#13866F]/0 group-hover:bg-[#13866F]/10 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <FaTimes size={18} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox}
              alt="Certificate"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 bg-[#13866F]/80 text-white rounded-full hover:bg-[#13866F]"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 bg-[#13866F]/80 text-white rounded-full hover:bg-[#13866F]"
  >
    <FaChevronLeft />
  </button>
);

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <section id="gallery" className="py-8 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-8 border-b-2 border-[#13866F] inline-block">
          Gallery
        </h3>
      </div>
      <div className="bg-[#E6F4F1] shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {certificateData.map((cert) => (
              <div key={cert.id} className="px-2">
                <div className="bg-white border border-[#e0e0e0] rounded-lg shadow-md p-2 transition hover:shadow-xl">
                  <div className="relative w-full h-[220px]">
                    <Image
                      src={cert.src}
                      alt="Certificate"
                      fill
                      className="cursor-pointer object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:brightness-105"
                      onClick={() => setLightbox(cert.src)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Lightbox modal */}
          {lightbox && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setLightbox(null)}
            >
              <div className="relative max-h-[90vh] max-w-[90vw]">
                <img
                  src={lightbox}
                  alt="Certificate"
                  className="max-h-[90vh] max-w-[90vw] rounded-md shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

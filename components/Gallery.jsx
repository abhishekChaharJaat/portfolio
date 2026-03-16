"use client";

import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";
import Image from "next/image";

const certs = [
  { id: 1, src: "/gallery/ach1.jpg" },
  { id: 2, src: "/gallery/ach2.jpg" },
  { id: 3, src: "/gallery/ach3.jpg" },
  { id: 4, src: "/gallery/ach4.jpg" },
  { id: 5, src: "/gallery/ach5.jpg" },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] rounded-full shadow-sm transition"
    aria-label="Next"
  >
    <FaChevronRight size={13} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] rounded-full shadow-sm transition"
    aria-label="Prev"
  >
    <FaChevronLeft size={13} />
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
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Gallery
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
          <p className="mt-4 text-slate-500 text-base">
            Certificates &amp; milestones
          </p>
        </div>

        <div className="relative px-6">
          <Slider {...settings}>
            {certs.map((c) => (
              <div key={c.id} className="px-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  onClick={() => setLightbox(c.src)}
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={c.src}
                      alt="Certificate"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 transition-colors duration-300 flex items-center justify-center">
                      <FaExpand
                        size={22}
                        className="text-white opacity-0 group-hover:opacity-100 drop-shadow-lg transition-opacity duration-300"
                      />
                    </div>
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
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            onClick={() => setLightbox(null)}
          >
            <FaTimes size={16} />
          </button>
          <img
            src={lightbox}
            alt="Certificate"
            className="max-h-[88vh] max-w-[88vw] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

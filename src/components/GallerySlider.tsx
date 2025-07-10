// src/components/GallerySlider.tsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/gallery/slider1.PNG",
  "/gallery/slider2.PNG",
  "/gallery/slider3.PNG",
  "/gallery/slider4.PNG",
  "/gallery/slider5.PNG",
  "/gallery/slider6.PNG"
];

export default function GallerySlider() {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    created: () => {
      clearNextTimeout();
      nextTimeout();
    },
    slideChanged: () => {
      clearNextTimeout();
      nextTimeout();
    },
  });

  // 자동 슬라이드 예약
  const nextTimeout = () => {
    timeout.current = setTimeout(() => {
      slider.current?.next();
    }, 3500); // 3.5초
  };

  const clearNextTimeout = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };

  const handleManualNav = (direction: "prev" | "next") => {
    clearNextTimeout(); // 수동 조작 시 타이머 초기화
    if (direction === "prev") {
    slider.current?.prev();
  } else {
    slider.current?.next();
  }
    nextTimeout(); // 새 타이머 재설정
  };

  useEffect(() => {
    return () => {
      clearNextTimeout(); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, []);

  return (
    <section className="w-full px-4 py-16 bg-gray-100 relative">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">갤러리</h2>

      <div className="relative max-w-3xl mx-auto">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {images.map((src, index) => (
            <div className="keen-slider__slide" key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-80 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* 좌우 버튼 */}
        <button
          onClick={() => handleManualNav("prev")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => handleManualNav("next")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ArrowRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}

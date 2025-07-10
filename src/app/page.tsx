// src/app/page.tsx

import GallerySlider from "@/components/GallerySlider";
import ProductSection from "@/components/ProductSection";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutUs";
import HistorySection from "@/components/HistorySection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center -mt-16"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}>

            {/* 🔷 오버레이: 블러 + 투명도 */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#8BC34A]">
            혁신적인 솔루션으로 미래를 만들다
          </h1>
          <p className="text-xl text-black mb-8">
            고객의 성공을 위한 최고의 파트너, 센트 코리아가 당신의 비전을 현실로 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-[#8BC34A] text-white px-8 py-3 rounded-full font-semibold"
            >
              제품 및 솔루션 보기
            </a>
            <a
              href="#contact"
              className="bg-white text-[#8BC34A] px-8 py-3 rounded-full font-semibold"
            >
              견적 문의하기
            </a>
          </div>
        </div>
      </section>


      {/* Gallery Slider Section */}

      <GallerySlider />

      {/* Products Section */}

      <ProductSection />

      {/* About Us Section */}

      <AboutSection />

      {/* History Section */}

      <HistorySection />


      {/* Contact Form Section */}

      <ContactForm />
      
    </main>
  );
}

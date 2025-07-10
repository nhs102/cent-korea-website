// components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">회사 소개</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          센트 코리아는 자동화 시스템, 정밀 제어 기술, 스마트 센서 등 첨단 제조 솔루션을 선도하는 기업입니다.
          <br />
          고객의 성장을 돕는 파트너로서 혁신과 신뢰를 바탕으로 함께 미래를 만들어갑니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center">
            <img src="/images/icons/experience.png" alt="경력" className="w-12 h-12 mb-2" />
            <h3 className="text-green-600 font-semibold text-lg">10년 이상 노하우</h3>
            <p className="text-sm text-gray-500">산업 자동화 분야에서 축적된 경험</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/icons/innovation.png" alt="혁신" className="w-12 h-12 mb-2" />
            <h3 className="text-green-600 font-semibold text-lg">지속적인 혁신</h3>
            <p className="text-sm text-gray-500">최신 기술 기반의 솔루션 제공</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/icons/trust.png" alt="신뢰" className="w-12 h-12 mb-2" />
            <h3 className="text-green-600 font-semibold text-lg">고객 중심</h3>
            <p className="text-sm text-gray-500">고객 성공을 최우선으로</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

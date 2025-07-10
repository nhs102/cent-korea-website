// components/ProductSection.tsx

const ProductSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6" id="products">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">제품 및 솔루션</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 제품 카드 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <img src="/images/icons/automation.png" alt="자동화 시스템" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">자동화 생산 시스템</h3>
            <p className="text-gray-600 text-sm">
              공정 최적화를 위한 자동화 솔루션으로 생산성을 극대화합니다.
            </p>
          </div>

          {/* 제품 카드 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <img src="/images/icons/control.png" alt="정밀 제어 시스템" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">정밀 제어 시스템</h3>
            <p className="text-gray-600 text-sm">
              고정밀 로봇 제어 기술로 정교한 작업을 실현합니다.
            </p>
          </div>

          {/* 제품 카드 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <img src="/images/icons/sensor.png" alt="스마트 센서 모듈" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">스마트 센서 모듈</h3>
            <p className="text-gray-600 text-sm">
              환경 데이터 감지 및 실시간 분석이 가능한 IoT 센서.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

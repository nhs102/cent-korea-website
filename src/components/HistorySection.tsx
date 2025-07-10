// components/HistorySection.tsx

const HistorySection = () => {
  return (
    <section className="w-full bg-white py-20 px-6" id="history">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">연혁</h2>
        <ul className="text-left space-y-4 text-gray-700 text-base">
          <li>
            <span className="font-semibold text-[#8BC34A]">2013년 10월</span> - 센트코리아 설립
          </li>
          <li>
            <span className="font-semibold text-[#8BC34A]">2021년</span> - ㅇㅇ
          </li>
          <li>
            <span className="font-semibold text-[#8BC34A]">2023년</span> - ㅇㅇ
          </li>
          <li>
            <span className="font-semibold text-[#8BC34A]">2024년</span> - ㅇㅇ
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HistorySection;

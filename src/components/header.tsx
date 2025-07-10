export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-[#8BC34A]">CENT KOREA</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">홈</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">회사 소개</a></li>
          <li><a href="#products" className="text-gray-700 hover:text-gray-900 font-medium">제품</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">문의</a></li>
        </ul>
      </nav>
    </header>
  );
}

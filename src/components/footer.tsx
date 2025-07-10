export default function Footer() {
  return (
    <footer className="w-full text-center py-8 text-sm text-gray-600 bg-white mt-16 shadow-inner">
      {/* Copyright information */}
      <p>&copy; {new Date().getFullYear()} CENT KOREA | 대표자: 남상병 | 사업자등록번호: 615-81-97679</p>
      {/* Contact information */}
      <p className="mt-1">문의: contact@scentkorea.com | 전화: 055-342-5117</p>
      {/* Company address */}
      <p className="mt-1">주소: 경상남도 김해시 김해대로 한림면 99-1</p>
      <p className="mt-1">@ 2025 CENT KOREA. All rights reserved.</p>
    </footer>
  );
}
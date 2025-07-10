"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // 폼 초기화
    setTimeout(() => {
      formRef.current?.reset();
    }, 500); // 약간의 지연을 주어 전송 후 초기화
  };

  return (
    <section
      id="contact"
      className="w-full max-w-2xl px-4 py-16 bg-white shadow-lg rounded-lg my-16 text-left relative"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">
        견적 문의
      </h2>
      <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
        프로젝트에 대한 문의 사항이나 견적 요청이 있으시면 아래 양식을 작성해 주세요.
        최대한 빠르게 답변 드리겠습니다.
      </p>

      {/* ✅ 토스트 메시지 */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          전송되었습니다!
        </div>
      )}

      <form
        ref={formRef}
        action="https://formspree.io/f/xanjrjlj"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* 이름 */}
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="홍길동"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
          />
        </div>

        {/* 회사명 */}
        <div>
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
            회사명 (선택 사항)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="센트코리아"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
          />
        </div>

        {/* 이메일 */}
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@scentkorea.com"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
          />
        </div>

        {/* 연락처 */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            연락처 (선택 사항)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="010-1234-5678"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
          />
        </div>

        {/* 문의 내용 */}
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            문의 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="자세한 문의 내용을 남겨주세요."
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#8BC34A] resize-y"
          ></textarea>
        </div>

        {/* 개인정보 동의 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacyConsent"
            name="privacyConsent"
            required
            className="form-checkbox h-5 w-5 text-[#8BC34A] border-gray-300 rounded focus:ring-[#8BC34A]"
          />
          <label htmlFor="privacyConsent" className="ml-2 text-sm text-gray-700">
            <a href="#" className="text-[#8BC34A] hover:underline">개인정보 처리 방침</a>에 동의합니다. <span className="text-red-500">*</span>
          </label>
        </div>

        {/* 버튼 */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#8BC34A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#7CB342] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:ring-offset-2"
          >
            문의하기
          </button>
        </div>
      </form>
    </section>
  );
}

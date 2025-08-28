import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Tạo Context
type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 2. Provider
const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("vi");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Hook tiện dụng
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage phải được dùng trong LanguageProvider");
  return context;
};

// 4. Component chọn ngôn ngữ
const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div>
      <span>🌐 Ngôn ngữ hiện tại: </span>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

// 5. Component hiển thị lời chào
const Greeting = () => {
  const { language } = useLanguage();
  return (
    <h2>
      {language === "vi" ? "Xin chào!" : "Hello!"}
    </h2>
  );
};

// 6. App chính
export default function Baitap9() {
  return (
    <LanguageProvider>
      <div style={{ padding: "20px" }}>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvider>
  );
}

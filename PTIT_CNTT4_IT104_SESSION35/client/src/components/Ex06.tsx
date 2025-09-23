// src/components/LanguageSwitcher.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../stores/slices/Ex06";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state: any) => state.language.lang);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(toggleLanguage(event.target.value as "vi" | "en"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <select value={lang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2 style={{ marginTop: "20px" }}>
        {lang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}
      </h2>
    </div>
  );
}

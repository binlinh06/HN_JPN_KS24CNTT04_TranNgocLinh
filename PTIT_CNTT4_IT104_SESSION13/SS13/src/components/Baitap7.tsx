import React, { useState } from "react";

interface AppState {
  theme: "light" | "dark";
  language: "vietnamese" | "english";
}

const App: React.FC = () => {
  // Khai báo state
  const [state, setState] = useState<AppState>({
    theme: "light",
    language: "vietnamese",
  });

  // Đổi theme
  const toggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  // Đổi ngôn ngữ
  const toggleLanguage = () => {
    setState((prev) => ({
      ...prev,
      language: prev.language === "vietnamese" ? "english" : "vietnamese",
    }));
  };

  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>
        Nền: {state.theme === "light" ? "Sáng" : "Tối"}
      </h2>
      <h2>
        Ngôn ngữ: {state.language === "vietnamese" ? "Tiếng Việt" : "English"}
      </h2>

      <button onClick={toggleTheme}>Đổi nền</button>
      <button onClick={toggleLanguage} style={{ marginLeft: "10px" }}>
        Đổi ngôn ngữ
      </button>
    </div>
  );
};

export default App;

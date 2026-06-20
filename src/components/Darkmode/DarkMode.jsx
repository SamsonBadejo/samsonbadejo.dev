import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";

const DarkMode = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          darkMode ? "bg-red-800" : "bg-gray-100"
        }`}
      >
        {/* Circle */}
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
            darkMode ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {darkMode ? "🌙" : "☀️"}
        </div>
      </button>
    </div>
  );
};

export default DarkMode;

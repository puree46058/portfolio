import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@/context/ThemeContext.jsx";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      aria-label={`สลับธีมเป็น${isDark ? "โหมดสว่าง" : "โหมดมืด"}`}
      onClick={toggleTheme}
    >
      <span
        className={`theme-toggle__thumb ${isDark ? "theme-toggle__thumb--dark" : ""}`}
        aria-hidden="true"
      >
        {isDark ? "🌙" : "🌞"}
      </span>
    </button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

export default ThemeToggle;

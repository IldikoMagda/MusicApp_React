import React from "react";
import { useTheme, useThemeUpdate } from "./themeProvider";

export default function Theme() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className="theme-button">
      <button onClick={toggleTheme}>Change Color Scheme!</button>
    </div>
  );
}


import React from "react";
import { useState, useEffect } from "react";

const ThemeButton = () => {
  useEffect(() => {
    theme === "light"
      ? document.getElementById("sun").classList.remove("scale-0")
      : document.getElementById("moon").classList.remove("scale-0");
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return (
    <button
      className="flex justify-center items-center drop-shadow bg-[rgba(0,0,0,0.6)]  w-[13vw] h-[13vw] lg:w-[2.8vw] lg:h-[2.8vw] rounded-full text-[6vw] lg:text-[1.4vw] lg:mx-5 transition"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          document.getElementById("sun").classList.add("scale-0");
          document.getElementById("moon").classList.remove("scale-0");
        } else {
          setTheme("light");
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          document.getElementById("moon").classList.add("scale-0");
          document.getElementById("sun").classList.remove("scale-0");
        }
      }}
    >
      <span className="fa-stack">
        <i
          id="sun"
          className="text-white transition scale-0 fa-solid fa-sun fa-stack-1x"
        ></i>
        <i
          id="moon"
          className="text-white transition scale-0 fa-solid fa-moon fa-stack-1x"
        ></i>
      </span>
    </button>
  );
};
export default ThemeButton;

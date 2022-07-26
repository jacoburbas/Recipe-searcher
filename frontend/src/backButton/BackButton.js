import React from "react";
const scrollTop = () => {
  window.scrollTo(0, 0);
};

export const changeBtnVisibilty = () => {
  document.documentElement.scrollTop > 600
    ? document
        .getElementById("backButton")
        .classList.remove("opacity-0", "scale-0")
    : document
        .getElementById("backButton")
        .classList.add("opacity-0", "scale-0");
};

window.addEventListener("scroll", changeBtnVisibilty);
const BackButton = () => {
  return (
    <button
      id="backButton"
      onClick={() => {
        setTimeout(scrollTop, 350);
      }}
      className="opacity-0 fixed drop-shadow bg-[#86672A] w-[12vw] h-[12vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full bottom-6 right-6 lg:bottom-10 lg:right-10 text-[3.5vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.5)] transition"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default BackButton;

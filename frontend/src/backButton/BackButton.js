import React from "react";
const scrollTop = () => {
  window.scrollTo(0, 0);
};
const BackButton = () => {
  return (
    <button
      id="backButton"
      onClick={() => {
        setTimeout(scrollTop, 350);
      }}
      className="opacity-0 fixed drop-shadow bg-[#86672A] w-[10vw] h-[10vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full bottom-6 right-6 lg:bottom-10 lg:right-10 text-[3.5vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.5)] transition"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default BackButton;

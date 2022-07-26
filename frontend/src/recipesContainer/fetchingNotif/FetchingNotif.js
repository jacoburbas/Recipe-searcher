import React from "react";

const FetchingNotif = ({ type }) => {
  return (
    <div
      className={
        type !== "bottomLoading"
          ? "fixed flex items-center text-[9px] lg:text-base lg:font-bold text-white justify-evenly p-1 top-2 right-2 lg:top-[1.65rem] lg:right-[6vw] rounded bg-[rgba(0,0,0,0.6)] drop-shadow w-[17vw] h-[4vh] lg:w-[6vw] lg:h-[6vh]"
          : "flex items-center text-[9px] lg:text-base lg:font-bold text-white justify-evenly p-1 top-2 right-2 lg:top-10 lg:right-10 rounded bg-[rgba(0,0,0,0.6)] drop-shadow w-[17vw] h-[4vh] lg:w-[6vw] lg:h-[6vh]"
      }
    >
      Loading
      <i className="fa-solid fa-spinner text-white text-[10px] lg:text-[1vw] animate-spin"></i>
    </div>
  );
};

export default FetchingNotif;

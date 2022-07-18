import React from "react";

const Recipe = ({ name, ingredients, url, focusedItems, weight }) => {
  const focusedNames = focusedItems.map((e) => e.name);
  const alike = focusedNames.join("|");

  return (
    <div className="rounded-lg  my-8 p-3  bg-white">
      <div className="w-fit font-bold text-xl border-b-[2px] border-[#a17b30]">
        {name}
        {focusedItems.length && weight !== ingredients.length
          ? " " + weight + "/" + ingredients.length
          : ""}
      </div>
      <div className="text-xs lg:text-base">
        <a href={url}>{url}</a>
      </div>

      <div className="flex justify-center px-10 items-center w-full">
        <ul className="flex flex-wrap m-3 p-3 list-disc">
          {ingredients.map((e, index) => {
            if (alike && RegExp(`\\b${alike}\\b`, "i").test(e)) {
              return (
                <li
                  key={index}
                  className=" lg:whitespace-nowrap basis-[100%] lg:basis-[40%] my-[3px] mx-[6px] p-[3px] text-sm text-green-600"
                >
                  {e}
                </li>
              );
            } else
              return (
                <li
                  key={index}
                  className=" lg:whitespace-nowrap basis-[100%] lg:basis-[40%]  my-[3px] mx-[6px]  p-[3px] text-sm"
                >
                  {e}
                </li>
              );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;

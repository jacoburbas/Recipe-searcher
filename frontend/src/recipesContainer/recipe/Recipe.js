import React from "react";

const Recipe = ({ name, ingredients, url, chosenItems, weight }) => {
  // from choosed items get string that matches regular expression syntax ("carrot|pumpkin|rice" etc.)
  const regExpSearch = chosenItems.map((e) => e.name).join("|");

  return (
    <div className="rounded-lg my-8 p-4 bg-white dark:bg-[#242526] overflow-hidden">
      <div className="w-fit font-bold text-xl border-b-[2px] border-[#a17b30] dark:text-[#e4e6ebd5]">
        {name}
        {chosenItems && weight !== ingredients.length
          ? " " + weight + "/" + ingredients.length
          : ""}
      </div>
      <div className="text-sm text-black dark:text-[#aaa] lg:text-base my-1 break-words">
        <a href={url}>{url}</a>
      </div>

      <div className="flex justify-center px-10 items-center w-full text-black dark:text-[#B0B3B8]">
        <ul className="flex flex-wrap m-3 p-3 list-disc">
          {ingredients.map((e, index) => {
            return (
              <li
                key={index}
                className={
                  //render green text when ingredients match your choosen ingredients
                  regExpSearch && RegExp(`\\b${regExpSearch}\\b`, "i").test(e)
                    ? "lg:whitespace-nowrap basis-[100%] lg:basis-[40%] my-[3px] mx-[6px] p-[3px] text-sm text-green-600"
                    : "lg:whitespace-nowrap basis-[100%] lg:basis-[40%]  my-[3px] mx-[6px]  p-[3px] text-sm"
                }
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

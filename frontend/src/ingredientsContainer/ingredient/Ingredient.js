import React from "react";

const Ingredient = ({
  name,
  items,
  setItems,
  chosenItems,
  setChosenItems,
  isFocused,
}) => {
  const clickHandler = (item) => {
    //
    if (isFocused) {
      setChosenItems(chosenItems.filter((e) => e.name !== item.target.id));
      setItems(
        [...items, chosenItems.filter((e) => e.name === name)[0]].sort((a, b) =>
          a.name > b.name ? 1 : -1
        )
      );
    }

    if (!isFocused) {
      setChosenItems([...chosenItems, items.filter((e) => e.name === name)[0]]);
      setItems(
        items
          .filter((e) => e.name !== item.target.id)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    }
  };

  return !isFocused ? (
    <div
      className="whitespace-nowrap grow basis-[40%] lg:basis-[30%] flex items-center justify-center p-[2.3vw] lg:p-[0.45vw] m-[5px] lg:m-1 rounded-lg bg-[rgba(0,0,0,0.24)]  lg:hover:bg-[rgba(0,0,0,0.15)] font-semibold text-white dark:text-white/80 text-[3vw] lg:text-[1vw] xl:text-[0.78vw] cursor-pointer transition-colors"
      id={name}
      onClick={clickHandler}
    >
      {name}
    </div>
  ) : (
    <div
      className="w-max flex items-center justify-center p-[2.3vw] lg:p-[0.45vw] m-1 rounded-lg bg-[rgba(0,0,0,0.24)] hover:bg-[rgba(0,0,0,0.15)] font-medium lg:font-semibold text-white dark:text-white/80 text-[3vw] lg:text-[1vw] xl:text-[0.78vw] cursor-pointer transition-colors"
      id={name}
      onClick={clickHandler}
    >
      {name}
    </div>
  );
};

export default Ingredient;

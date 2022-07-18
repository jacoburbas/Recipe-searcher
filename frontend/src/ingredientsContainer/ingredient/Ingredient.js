import React from "react";

const Ingredient = ({
  name,
  items,
  setItems,
  focusedItems,
  setFocusedItems,
  isFocused,
}) => {
  const clickHandler = (item) => {
    if (isFocused) {
      setFocusedItems(focusedItems.filter((e) => e.name !== item.target.id));
      setItems(
        [...items, focusedItems.filter((e) => e.name === name)[0]].sort(
          (a, b) => (a.name > b.name ? 1 : -1)
        )
      );
    } else {
      setFocusedItems([
        ...focusedItems,
        items.filter((e) => e.name === name)[0],
      ]);
      setItems(
        items
          .filter((e) => e.name !== item.target.id)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    }
  };

  return !isFocused ? (
    <div
      className="whitespace-nowrap grow basis-[40%] lg:basis-[30%]   flex items-center justify-center p-[2vw] lg:p-[0.45vw] m-[5px] lg:m-1 rounded-lg bg-[rgba(0,0,0,0.24)] font-semibold  text-white text-[2vw] lg:text-[1vw] xl:text-[0.78vw] cursor-pointer"
      id={name}
      onClick={clickHandler}
    >
      {name}
    </div>
  ) : (
    <div
      className="w-max flex items-center justify-center p-2 m-1 rounded-lg bg-[rgba(0,0,0,0.24)] font-medium lg:font-semibold text-white text-[2vw] lg:text-[1vw] xl:text-[0.78vw] cursor-pointer "
      id={name}
      onClick={clickHandler}
    >
      {name}
    </div>
  );
};

export default Ingredient;

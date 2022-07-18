import React from "react";
import Ingredient from "../ingredient/Ingredient";
import { icons } from "./icons";

const IngredientGroup = ({
  type,
  items,
  itemsDidLoad,
  setItems,
  focusedItems,
  setFocusedItems,
}) => {
  return (
    <div className="lg:h-min grow-0 shrink-0 lg:grow lg:shrink basis-[100%] lg:basis-auto xl:basis-[25%] bg-[rgba(0,0,0,0.32)] mr-2 p-2 rounded last:mr-0 snap-start">
      <div className="flex w-full items-center  justify-between whitespace-nowrap capitalize m-2 font-bold text-white text-[3vw] lg:text-[1vw] xl:text-[0.8vw]">
        {type}
        {icons.filter((e) => e.name === type).map((e) => e.icon)}
      </div>

      <div className="flex flex-wrap ">
        {itemsDidLoad
          ? items
              .filter((e) => e.type === type)
              .map((e, index) => (
                <Ingredient
                  key={index}
                  name={e.name}
                  type={e.type ? e.type : ""}
                  items={items}
                  setItems={setItems}
                  focusedItems={focusedItems}
                  setFocusedItems={setFocusedItems}
                  isFocused={false}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export default IngredientGroup;

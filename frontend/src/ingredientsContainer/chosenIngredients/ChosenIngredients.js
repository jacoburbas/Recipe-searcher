import React from "react";
import Ingredient from "../ingredient/Ingredient";

const ChoosenIngredients = ({
  itemsDidLoad,
  chosenItems,
  items,
  setItems,
  setChosenItems,
}) => {
  return (
    <div>
      <div className="my-3 mx-5 font-bold text-[3.5vw] lg:text-base text-black">
        My ingredients
      </div>
      <div className="flex my-3 mx-5 bg-[rgba(0,0,0,0.32)] rounded-2xl min-h-[4em]">
        <div className="flex flex-wrap items-center justify-start p-2">
          {itemsDidLoad
            ? chosenItems.map((e, index) => (
                <Ingredient
                  key={index}
                  type={e.type ? e.type : ""}
                  name={e.name}
                  items={items}
                  setItems={setItems}
                  chosenItems={chosenItems}
                  setChosenItems={setChosenItems}
                  isFocused={true}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
export default ChoosenIngredients;

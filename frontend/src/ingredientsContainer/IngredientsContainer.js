import React from "react";
import Search from "./searchInput/Search";
import Ingredient from "./ingredient/Ingredient";
import IngredientGroup from "./ingredientsGroup/IngredientsGroup";

const IngredientsContainer = ({
  items,
  setItems,
  itemsDidLoad,
  focusedItems,
  setFocusedItems,
}) => {
  const types = [
    ...new Set(
      items
        .map((e) => e.type)
        .sort()
        .reverse()
    ),
  ];

  return (
    <div
      id="ingredients-container"
      className="bg-gradient-to-t from-[#86672A] to-[#D6A64B] py-5  pr-3 lg:pr-2  min-h-screen max-h-full lg:max-h-screen drop-shadow-lg"
    >
      <Search setItems={setItems} focusedItems={focusedItems} />
      <div className="my-3 mx-5 font-bold text-black">My ingredients </div>
      <div className="flex my-3 mx-5 bg-[rgba(0,0,0,0.32)] rounded-2xl min-h-[4em]">
        <div className="flex flex-wrap items-center justify-start p-2">
          {itemsDidLoad
            ? focusedItems.map((e, index) => (
                <Ingredient
                  key={index}
                  type={e.type ? e.type : ""}
                  name={e.name}
                  items={items}
                  setItems={setItems}
                  focusedItems={focusedItems}
                  setFocusedItems={setFocusedItems}
                  isFocused={true}
                />
              ))
            : ""}
        </div>
      </div>
      <div className="flex my-3 ml-3 lg:mx-5 overflow-y-hidden overflow-x-auto h-[100%] lg:overflow-hidden rounded lg:h-auto lg:w-auto snap-x snap-mandatory">
        {itemsDidLoad
          ? items.length
            ? types.map((type, index) => (
                <IngredientGroup
                  key={index}
                  type={type}
                  itemsDidLoad={itemsDidLoad}
                  items={items}
                  setItems={setItems}
                  focusedItems={focusedItems}
                  setFocusedItems={setFocusedItems}
                />
              ))
            : "There are no ingredients left that matches your text"
          : ""}
      </div>
    </div>
  );
};

export default IngredientsContainer;

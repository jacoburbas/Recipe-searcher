import React, { useEffect, useState } from "react";
import Search from "./searchInput/Search";
import ThemeButton from "./themeButton/ThemeButton";
import ChosenIngredients from "./chosenIngredients/ChosenIngredients";
import IngredientGroup from "./ingredientsGroup/IngredientsGroup";

const IngredientsContainer = ({ chosenItems, setChosenItems }) => {
  useEffect(() => {
    const url = new URL(`https://localhost:5000/app/api/ingredients`);

    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        setItems(
          json.sort((a, b) => (a.name > b.name ? 1 : -1)),
          setItemsDidLoad(true)
        )
      );
  }, []);

  const [items, setItems] = useState([]);
  const [itemsDidLoad, setItemsDidLoad] = useState(false);

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
      className="bg-gradient-to-t from-[#443518] via-[#86672A] to-[#D6A64B] bg-pos-0 bg-size-200 dark:bg-pos-100 py-5 pr-3 lg:pr-2 min-h-screen max-h-full drop-shadow-lg transition-all duration-500"
    >
      <div className="flex justify-between items-center">
        <Search setItems={setItems} chosenItems={chosenItems} />
        <ThemeButton />
      </div>
      <ChosenIngredients
        itemsDidLoad={itemsDidLoad}
        chosenItems={chosenItems}
        items={items}
        setItems={setItems}
        setChosenItems={setChosenItems}
      />
      <div className="flex my-3 ml-3 lg:mx-5 overflow-y-hidden overflow-x-auto h-[100%] lg:overflow-hidden rounded lg:h-auto lg:w-auto snap-x snap-mandatory transition-all">
        {itemsDidLoad && items.length
          ? types.map((type, index) => (
              <IngredientGroup
                key={index}
                type={type}
                itemsDidLoad={itemsDidLoad}
                items={items}
                setItems={setItems}
                chosenItems={chosenItems}
                setChosenItems={setChosenItems}
              />
            ))
          : "There are no ingredients left that matches your text"}
      </div>
    </div>
  );
};

export default IngredientsContainer;

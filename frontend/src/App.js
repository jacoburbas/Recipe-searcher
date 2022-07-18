import React, { useEffect, useState } from "react";
import IngredientsContainer from "./ingredientsContainer/IngredientsContainer";
import RecipesContainer from "./recipesContainer/RecipesContainer";
import BackButton from "./backButton/BackButton";

const App = () => {
  useEffect(() => {
    fetch("http://192.168.1.89:5000/api/Ingredients/:id")
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
  const [focusedItems, setFocusedItems] = useState([]);

  const changeBtnVisibilty = () => {
    document.documentElement.scrollTop > 600
      ? document
          .getElementById("backButton")
          .classList.remove("opacity-0", "scale-0")
      : document
          .getElementById("backButton")
          .classList.add("opacity-0", "scale-0");
  };

  window.addEventListener("scroll", changeBtnVisibilty);

  return (
    <div className="overfolw-hidden">
      <IngredientsContainer
        items={items}
        setItems={setItems}
        itemsDidLoad={itemsDidLoad}
        focusedItems={focusedItems}
        setFocusedItems={setFocusedItems}
      />
      <RecipesContainer focusedItems={focusedItems} />
      <BackButton />
    </div>
  );
};

export default App;

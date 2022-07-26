import React, { useState } from "react";
import IngredientsContainer from "./ingredientsContainer/IngredientsContainer";
import RecipesContainer from "./recipesContainer/RecipesContainer";
import BackButton from "./backButton/BackButton";

const App = () => {
  const [chosenItems, setChosenItems] = useState([]);

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark")
      document.documentElement.classList.add("dark");
  } else localStorage.setItem("theme", "light");

  return (
    <div>
      <IngredientsContainer
        chosenItems={chosenItems}
        setChosenItems={setChosenItems}
      />
      <RecipesContainer chosenItems={chosenItems} />
      <BackButton />
    </div>
  );
};

export default App;

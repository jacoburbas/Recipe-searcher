import React, { useEffect, useRef, useState } from "react";
import FetchingNotif from "./fetchingNotif/FetchingNotif";
import Recipe from "./recipe/Recipe";
import InfiniteScroll from "react-infinite-scroll-component";
import { serverAddres } from "../config";

const RecipeContainer = ({ chosenItems }) => {
  useEffect(() => {
    // cancel old not finished requests
    if (abortController.current) abortController.current.abort();
    abortController.current = new AbortController();

    fetchData();

    // always reset skip number when chosen ingredients change
    setFetchSkip(20);
  }, [chosenItems]);

  const [recipes, setRecipes] = useState([]);
  const [fetchSkip, setFetchSkip] = useState(20);
  const [isFetching, setIsFetching] = useState(true);

  const abortController = useRef();

  const fetchData = (skip = false) => {
    let like = chosenItems.length ? chosenItems.map((e) => e.name) : "";

    const url = new URL(`http://${serverAddres}:5000/api/recipes`),
      params = skip ? { search: like, skip: fetchSkip } : { search: like };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const { signal } = abortController.current;

    // function called from infinite scroll (with skip)

    //dont fetch more recipes on scroll if these recipes are "old"
    if (!isFetching) {
      if (skip) {
        fetch(url)
          .then((res) => res.json())
          .then((json) => setRecipes(recipes.concat(json)))
          .catch((error) => console.log("ERROR: " + error));

        setFetchSkip(fetchSkip + 20);
      }
    }

    if (!skip) {
      setIsFetching(true);

      fetch(url, { signal })
        .then((res) => res.json())
        .then((json) => {
          setRecipes(json);
          setIsFetching(false);
        })
        .catch((error) => console.log("ERROR: " + error));
    }
  };

  return (
    <div className="p-3 pr-5 bg-gray-200 dark:bg-[#18191A] shadow-inner overflow-hidden">
      {isFetching ? <FetchingNotif /> : ""}
      <InfiniteScroll
        dataLength={recipes.length}
        next={() => fetchData(true)}
        hasMore={!isFetching}
        loader={<FetchingNotif type="bottomLoading" />}
      >
        {recipes.map((e, index) => (
          <Recipe
            key={index}
            name={e.name}
            ingredients={e.ingredients}
            weight={e.weight}
            url={e.url}
            chosenItems={chosenItems}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default RecipeContainer;

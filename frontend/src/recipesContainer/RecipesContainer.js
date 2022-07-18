import React, { useEffect, useRef, useState } from "react";
import FetchingNotif from "./fetchingNotif/FetchingNotif";
import Recipe from "./recipe/Recipe";
import InfiniteScroll from "react-infinite-scroll-component";

const RecipeContainer = ({ focusedItems }) => {
  useEffect(() => {
    if (abortController.current) abortController.current.abort();

    abortController.current = new AbortController();
    const { signal } = abortController.current;

    let like = focusedItems.length ? focusedItems.map((e) => e.name) : "";

    const url = new URL(`http://192.168.1.89:5000/api/recipes`),
      params = { id: like };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    setIsFetching(true);

    fetch(url, { signal })
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json);
        setIsFetching(false);
      })
      .catch((error) => console.log("ERROR: " + error));

    setFetchSkip(10);
  }, [focusedItems]);

  const [recipes, setRecipes] = useState([]);
  const [fetchSkip, setFetchSkip] = useState(10);
  const [isFetching, setIsFetching] = useState(true);

  const abortController = useRef();

  const fetchmoreData = () => {
    const like = focusedItems.length ? focusedItems.map((e) => e.name) : "";

    const url = new URL(`http://192.168.1.89:5000/api/recipes`),
      params = { id: like, skip: fetchSkip };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    fetch(url)
      .then((res) => res.json())
      .then((json) => setRecipes(recipes.concat(json)))
      .catch((error) => console.log("ERROR: " + error));

    setFetchSkip(fetchSkip + 10);
  };

  return (
    <div className="p-3 pr-5 bg-gray-200 shadow-inner overflow-hidden">
      {isFetching ? <FetchingNotif /> : ""}
      <div className="">
        <InfiniteScroll
          dataLength={recipes.length}
          next={fetchmoreData}
          hasMore={!isFetching}
          loader={<FetchingNotif type="bottomLoading" />}
          endMessage={
            <div className="flex">
              Your new recipes are being loaded right now.
            </div>
          }
        >
          {recipes.map((e, index) => (
            <Recipe
              key={index}
              name={e.name}
              ingredients={e.ingredients}
              weight={e.weight}
              url={e.url}
              focusedItems={focusedItems}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default RecipeContainer;

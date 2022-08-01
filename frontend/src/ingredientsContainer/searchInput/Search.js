import React from "react";
import debounce from "lodash.debounce";

const Search = ({ setItems, chosenItems }) => {
  const handleInput = debounce((e) => {
    // only letters restricition
    let regex = /[^a-z]/gi;
    e.target.value = e.target.value.replace(regex, "");

    const url = new URL(
        `https://dolphin-app-f28qi.ondigitalocean.app/app/api/ingredients`
      ),
      params = { name: e.target.value };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        setItems(
          json
            // only show items that arent chosen yet
            .filter(
              (e) =>
                !chosenItems.find((f) => f.name === e.name && f._id === e._id)
            )
            .sort((a, b) => (a.name > b.name ? 1 : -1))
        )
      );
    //debounce timer
  }, 300);

  return (
    <div className="inputsearchbox flex items-center mx-5 py-3 px-5 rounded-[15px] border-solid border-[1px] border-black">
      <i className="mx-4 text-xl text-black fa-solid fa-magnifying-glass "></i>
      <input
        className="inputsearch w-full h-full text-black placeholder:text-black placeholder:text-xs lg:placeholder:text-base bg-transparent outline-none"
        type="text"
        placeholder="Filter ingredients..."
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;

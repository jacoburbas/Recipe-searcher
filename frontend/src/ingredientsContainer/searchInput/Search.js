import React from "react";
import debounce from "lodash.debounce";

const Search = ({ setItems, focusedItems }) => {
  const handleChange = debounce((e) => {
    // only letters restricition
    let regex = /[^a-z]/gi;
    e.target.value = e.target.value.replace(regex, "");

    let urlId = e.target.value;
    if (!urlId) urlId = ":id";
    fetch(`http://192.168.1.89:5000/api/Ingredients/${urlId}`)
      .then((res) => res.json())
      .then((json) =>
        setItems(
          json
            // only show items that arent choosen yet
            .filter(
              (e) =>
                !focusedItems.find((f) => f.name === e.name && f._id === e._id)
            )
            .sort((a, b) => (a.name > b.name ? 1 : -1))
        )
      );
    //debounce timer
  }, 300);

  return (
    <div className="flex justify-center lg:justify-start ">
      <div className="inputsearchbox flex items-center  w-3/5 lg:w-1/5 mx-5  py-3 rounded-[15px]  border-solid border-[1px] border-black">
        <i className="mx-4 text-xl text-black fa-solid fa-magnifying-glass "></i>
        <input
          className="inputsearch w-full h-full text-black placeholder:text-black placeholder:text-xs lg:placeholder:text-base bg-transparent outline-none"
          type="text"
          placeholder="Search for ingredients..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;

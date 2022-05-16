import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchField } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchField(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

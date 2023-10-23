import React from "react";
import { useGlobalContext } from "@/context";

const SearchMovies = ({ activePage }) => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <section>
      <form>
        <input
          index="searchInput"
          type="text"
          placeholder={`Search for ${activePage}`}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="text-black"
        />
      </form>
      <div></div>
    </section>
  );
};

export default SearchMovies;

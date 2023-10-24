import React from "react";
import { useGlobalContext } from "@/context";
import { BiSearch } from "react-icons/bi";

const SearchMovies = ({ activePage }) => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <section className="flex mb-[35px]">
      <p className="my-auto text-white pr-6 text-2xl">
        <BiSearch />
      </p>
      <form>
        <input
          index="searchInput"
          type="text"
          placeholder={`Search for ${activePage}`}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="text-white bg-transparent w-[400px] focus:outline-none capitalize"
        />
      </form>
      <div></div>
    </section>
  );
};

export default SearchMovies;

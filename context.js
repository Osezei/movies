import React, { useContext, useEffect, useState } from "react";
import { initialData } from "./data";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  //data array
  const [data] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  //fetch bookmarked movies from localstorage
  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedBookmarks);
  }, []);

  const bookmarkItems = data.filter((movie) =>
    bookmarkedMovies.includes(movie.id)
  );

  //category function
  const switchCategory = (category) => {
    setCurrentCategory(category);
    if (category === "all") {
      setSortedData(data); //show all items
    } //bookmark category
    else if (category === "bookmark") {
      setSortedData(bookmarkItems);
    }
    //end of bookmark category
    else {
      const filteredData = data.filter((item) => item.category === category);
      setSortedData(filteredData); //show filtered items base on category
    }
    setSearch(""); //reset search when switching between categories
  };

  //search function
  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
    let filteredData = sortedData;
    if (query) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    setSortedData(filteredData);
  };

  //bookmark toggle
  const toggleBookmark = (id) => {
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarks = prevBookmarkedMovies.includes(id)
        ? prevBookmarkedMovies.filter((itemId) => itemId !== id) //remove from bookmark
        : [...prevBookmarkedMovies, id]; //add to bookmark

      //save updated bookmarks to localstorage
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarks)
      );
      return updatedBookmarks;
    });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        sortedData,
        search,
        handleSearch,
        toggleBookmark,
        switchCategory,
        bookmarkedMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

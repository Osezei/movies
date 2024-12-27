import React from "react";
import { useGlobalContext } from "@/context";

const BookmarkList = () => {
  const { data, bookmarkedMovies } = useGlobalContext();

  const bookmarkItems = data.filter((movie) =>
    bookmarkedMovies.includes(movie.id)
  );

  return (
    <div>
      {bookmarkItems.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default BookmarkList;

import React from "react";
import { Layout } from "@/components/Layout";

import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

const Bookmark = ({}) => {
  const activePage = "bookmark";
  const { bookmark, removeBookmark } = useGlobalContext();

  //const { title, id } = movieList;
  // <span>
  //   {bookmark.length} {watched.length === 1 ? "movie" : "movies"}
  // </span>;

  if (bookmark.length < 1) {
    return (
      <Layout activePage={activePage}>
        <p className="text-white">nothing to show</p>
      </Layout>
    );
  } else
    return (
      <Layout activePage={activePage}>
        <section className="text-white">
          {bookmark.map((movie) => {
            return <article key={movie.id}>{movie.title}</article>;
          })}
        </section>
      </Layout>
    );
};

export default Bookmark;
// if (action.type === "ADD_BOOKMARK") {
//     let bookmark = [];
//     state.bookmark.forEach((movie) => {
//       if (!state.bookmark.includes(movie)) {
//         state.bookmark.push(movie);
//       }
//     });
//     // if (movie === [...state]) {
//     //   return null;
//     // }
//     console.log(action.payload);
//     return {
//       ...state,
//       bookmark,
//     };

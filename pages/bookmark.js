import React from "react";
import { Layout } from "@/components/Layout";

import { useGlobalContext } from "@/context";

const Bookmark = () => {
  const activePage = "bookmark";
  const { bookmark, removeBookmark } = useGlobalContext();

  // <span>
  //   {bookmark.length} {watched.length === 1 ? "movie" : "movies"}
  // </span>;

  if (bookmark.length < 1) {
    return <p className="text-white">nothing to show</p>;
  } else
    return (
      <Layout activePage={activePage}>
        <section className="text-white">
          {bookmark.map((item) => {
            const { title, id } = item;
            return (
              <article key={id}>
                <p>{title}</p>
                <button onClick={() => removeBookmark(id)}>remove</button>
              </article>
            );
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

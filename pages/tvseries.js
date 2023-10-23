import React from "react";
import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";

const Tvseries = () => {
  const activePage = "tvseries";
  const { searchTerm, movie_list } = useGlobalContext();

  let movie_tvseries = [];

  movie_list.filter((movie) => {
    if (movie.category === "TV Series") {
      movie_tvseries.push(movie);
    } else null;
  });
  return (
    <Layout activePage={activePage}>
      <section>
        {/* <p>{searchTerm.length}</p> */}

        {movie_tvseries

          .filter((movie) => {
            if (searchTerm === "") {
              // end
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })

          .map((movie) => {
            //const listNumber = movie.length;
            //console.log(listNumber);
            // if (listNumber < 1) {
            //   return (
            //     <>
            //       <p className="text-white">nothing available</p>
            //     </>
            //   );
            // }

            return (
              <article key={movie.id}>
                <p>{movie.title}</p>
              </article>
            );
          })}
      </section>
    </Layout>
  );
};

export default Tvseries;

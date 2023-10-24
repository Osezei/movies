import React from "react";
import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

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
      <section className="grid grid-cols-4 gap-x-10 gap-y-8">
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
            const listNumber = movie.length;
            //console.log(listNumber);
            return <Card key={movie.id} {...movie} />;
          })}
      </section>
    </Layout>
  );
};

export default Tvseries;

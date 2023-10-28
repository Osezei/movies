import React from "react";
//import { data } from "@/data";

const MovieList = ({ data, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {data.map((movie) => {
          return <article key={movie.id}>{movie.title}</article>;
        })}
      </div>
    </section>
  );
};

export default MovieList;

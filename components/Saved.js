import React from "react";
import { useGlobalContext } from "@/context";
import Card from "./Card";

const Saved = ({ movie }) => {
  return <article key={movie.id}>{movie.title}</article>;
};

export default Saved;

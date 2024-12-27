import React from "react";

const Navigation = ({ switchCategory }) => {
  return (
    <>
      <button onClick={() => switchCategory("all")}>all</button>
      <button onClick={() => switchCategory("Movie")}>movies</button>
      <button onClick={() => switchCategory("TV Series")}>tv movies</button>
      <button onClick={() => switchCategory("bookmark")}>bookmark</button>
    </>
  );
};

export default Navigation;

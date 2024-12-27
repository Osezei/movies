import React from "react";

const Trending = ({}) => {
  return (
    <div>
      {trending.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Trending;

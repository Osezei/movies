import React from "react";

const MovieList = ({ sortedData, toggleBookmark }) => {
  return (
    <div>
      {sortedData.length === 0 ? (
        <p>no data found</p>
      ) : (
        <div className="flex flex-col gap-5">
          {sortedData.map((item) => {
            // if ((item.isTrending = true)) {
            //   return <div key={item.id}>hello</div>;
            // }
            return (
              <div key={item.id} className="bg-red-600 w-fit">
                {item.title}
                <p>{item.category}</p>
                <div>
                  <button onClick={() => toggleBookmark(item.id)}>
                    bookmark
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieList;

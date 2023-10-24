import React from "react";
import { useGlobalContext } from "@/context";
import Image from "next/image";
import Svg from "../public/assets/icon-nav-tv-series.svg";
import { BsDot } from "react-icons/bs";

const Card = ({ title, id, year, category, rating, thumbnail }) => {
  const { addBookmark } = useGlobalContext();
  return (
    <article key={id}>
      <Image
        src={`/${thumbnail.regular.small}`}
        width={280}
        height={174}
        alt={title}
        priority
        className=" rounded-lg"
      />
      <section>
        <div className="mt-2 text-[13px] font-light flex gap-x-2 opacity-50">
          <p>{year}</p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p className="flex">
            <Image
              src={Svg}
              width={12}
              height={12}
              alt="svg"
              className="mr-[6px] object-contain my-auto"
            />
            {category}
          </p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p>{rating}</p>
        </div>
        <div className="mt-[5px]">
          <p className="text-[18px] font-medium">{title}</p>
        </div>
      </section>
      <button onClick={() => addBookmark(id)}>bookmark</button>
    </article>
  );
};

export default Card;

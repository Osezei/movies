import React, { useState } from "react";
import { data } from "@/data";
import { useGlobalContext } from "@/context";
import List from "./List";
import Trending from "./Trending";
import Link from "next/link";
import Movie from "./Movie";
import User from "../public/assets/image-avatar.png";
import Image from "next/image";
import HomeButton from "../public/assets/logo.svg";
import { TbMovie } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";
import { BiGridSmall } from "react-icons/bi";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import Bookmark from "@/pages/bookmark";

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    movie_list,
    moviesCategory,
    activeFilter,
    addBookmark,
    removeBookmark,
  } = useGlobalContext();

  let category = [];

  {
    data.map((button) => {
      category.push(button.category);
    });
  }

  return (
    <section className="">
      {/* buttons */}
      <div className="flex gap-x-9 justify-center">
        <div className="bg-[#161D2F] h-[960px] w-[96px] mt-8 rounded-lg">
          <ul className="mt-[35.4px] mb-[75px] flex justify-center">
            <Link href="/">
              <Image
                src={HomeButton}
                width={32}
                height={25.6}
                alt="homebutton"
              />
            </Link>
          </ul>
          <ul className="cursor-pointer h-[180px] flex flex-col justify-between text-center">
            {["all", ...new Set(category)].map((item, index) => {
              if (item === "all") {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                    }}
                    className={`capitalize text-white ease-in-out duration-300 text-[50px] mx-auto ${
                      activeFilter === item ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <BiGridSmall />
                  </li>
                );
              }
              if (item === "Movie") {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                    }}
                    className={`capitalize text-white ease-in-out duration-300 text-[35px] mx-auto ${
                      activeFilter === item ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <TbMovie />
                  </li>
                );
              }
              if (item === "TV Series") {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                    }}
                    className={`capitalize text-white ease-in-out duration-300 text-[30px] mx-auto ${
                      activeFilter === item ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <BsCameraReelsFill />
                  </li>
                );
              }

              return (
                <>
                  <li
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                      //console.log(item);
                    }}
                    className={`text-sm capitalize text-white ease-in-out duration-300 ${
                      activeFilter === item ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
          <ul
            className={`text-[28px] capitalize ease-in-out duration-300 flex justify-center mt-14`}
          >
            <Link href="/bookmark">
              <FaBookmark />
            </Link>
          </ul>
          <ul className="mt-[552px] flex justify-center">
            <Image src={User} width={40} height={40} alt="user" />
          </ul>
        </div>
        {/* end of buttons */}

        <div className="mt-[65px] w-[1240px]">
          {/* search form */}
          <form className="flex mb-[35px]">
            <p className="my-auto text-white pr-6 text-2xl">
              <BiSearch />
            </p>

            <input
              index="searchInput"
              type="text"
              placeholder="Search for movies or TV series"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              className="text-white bg-transparent w-[400px] focus:outline-none"
            />
          </form>
          {/* search form end */}
          {/* movie list */}

          <div className=" ">
            <h3 className="text-[32px] font-light text-white mb-8">
              Recommmended for you
            </h3>
            <div className="flex flex-wrap gap-x-10 gap-y-8">
              {movie_list
                ?.filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })

                .map((val) => {
                  // if (val.category === "Movie") {
                  //   return <Movie key={index} {...val} />;
                  // } else {}
                  //const {} = bookmarkMovie;
                  const { id, title } = val;
                  return (
                    <article key={id}>
                      <p>{title}</p>
                      <button onClick={() => addBookmark(val)}>bookmark</button>
                      <button onClick={() => removeBookmark(val)}>
                        removeBookmark
                      </button>
                    </article>
                  );
                })}
            </div>
          </div>

          {/* movie list end */}
        </div>
      </div>
    </section>
  );
};

export default Search;

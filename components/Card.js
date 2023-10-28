// import React from "react";
// import { useGlobalContext } from "@/context";
// import Image from "next/image";
// import Svg from "../public/assets/icon-nav-tv-series.svg";
// import { BsDot } from "react-icons/bs";
// import { TbMovie } from "react-icons/tb";

// const Card = ({ title, id, year, category, rating, thumbnail }) => {
//   const { addBookmark } = useGlobalContext();
//   let image = `/${thumbnail.regular.small}`;
//   const movie = {
//     id,
//     title,
//     year,
//     category,
//     rating,
//     thumbnail,
//   };
//   return (
//     <article key={id}>
//       <Image
//         //src={`/${thumbnail.regular.small}`}
//         src={image}
//         width={280}
//         height={174}
//         alt={title}
//         priority
//         className=" rounded-lg"
//       />
//       <section>
//         <div className="mt-2 text-[13px] font-light flex gap-x-2 opacity-50">
//           <p>{year}</p>
//           <p className="my-auto">
//             <BsDot />
//           </p>
//           <p className="flex">
//             {category === "TV Series" ? (
//               <Image
//                 src={Svg}
//                 width={12}
//                 height={12}
//                 alt="svg"
//                 className="mr-[6px] object-contain my-auto"
//               />
//             ) : (
//               <span className="my-auto mr-[6px]">
//                 <TbMovie />
//               </span>
//             )}
//             {category}
//           </p>
//           <p className="my-auto">
//             <BsDot />
//           </p>
//           <p>{rating}</p>
//         </div>
//         <div className="mt-[5px]">
//           <p className="text-[18px] font-medium">{title}</p>
//         </div>
//       </section>
//       <button onClick={() => addBookmark(movie, movie.i)}>bookmark</button>
//     </article>
//   );
// };

// export default Card;

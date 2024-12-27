import { useGlobalContext } from "@/context";
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";
import Navigation from "@/components/Navigation";
import BookmarkList from "@/components/BookmarkList";
import Trending from "@/components/Trending";

export default function Home() {
  //const activePage = "home";
  const {
    data,
    sortedData,
    search,
    handleSearch,
    toggleBookmark,
    switchCategory,
  } = useGlobalContext();

  return (
    <>
      <Navigation switchCategory={switchCategory} />
      <SearchBar search={search} handleSearch={handleSearch} />

      <MovieList sortedData={sortedData} toggleBookmark={toggleBookmark} />
    </>
  );
}

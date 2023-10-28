import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";
import SearchMovies from "@/components/SearchMovies";
import MovieList from "@/components/MovieList";

export default function Home() {
  const activePage = "home";
  const { data, inputValue, updateSearch } = useGlobalContext();

  return (
    <Layout activePage={activePage}>
      {inputValue ? (
        <MovieList
          data={data}
          title={`Found ${data.length > 0 ? data.length : "no"} result${
            data.length > 1 ? "s" : ""
          } for '${inputValue}'`}
        />
      ) : (
        <>
          <MovieList title="Recommended for you" />
        </>
      )}
    </Layout>
  );
}

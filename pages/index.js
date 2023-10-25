import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

export default function Home() {
  const activePage = "home";
  const { searchTerm, movie_list } = useGlobalContext();

  return (
    <Layout activePage={activePage}>
      <section className="grid grid-cols-4 gap-x-10 gap-y-8">
        {movie_list

          .filter((movie) => {
            if (searchTerm === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })

          .map((movie) => {
            //console.log(listNumber);
            return <Card key={movie.id} {...movie} />;
          })}
      </section>
    </Layout>
  );
}

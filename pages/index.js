import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";

export default function Home() {
  const activePage = "home";
  const { searchTerm, movie_list } = useGlobalContext();

  return (
    <Layout activePage={activePage}>
      <section className="text-white">{/* <Search /> */}</section>
      <section>
        {/* <p>{searchTerm.length}</p> */}

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
            const listNumber = movie.length;
            //console.log(listNumber);
            if (listNumber < 1) {
              return (
                <>
                  <p className="text-white">nothing available</p>
                </>
              );
            }

            return (
              <article key={movie.id}>
                <p>{movie.title}</p>
              </article>
            );
          })}
      </section>
    </Layout>
  );
}

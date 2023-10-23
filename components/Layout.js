import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";
import SearchMovies from "./SearchMovies";

export const Layout = ({ children, activePage }) => {
  return (
    <section className="text-white">
      <Head>
        <title>{activePage} -- movies</title>
      </Head>
      <div>
        <Navigation activePage={activePage} />
        <main>
          <SearchMovies activePage={activePage} />
          <div>{children}</div>
        </main>
      </div>
    </section>
  );
};

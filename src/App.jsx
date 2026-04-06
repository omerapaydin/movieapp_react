import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import Main from "./components/Main";

import { movie_list } from "./data";

import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [watchListMovies, setWatchListMovies] = useState(movie_list);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  return (
    <>
      <Header>
        <Logo />
        <SearchForm />
        <WatchListButton
          movies={watchListMovies}
          onSetsWatchListOpen={setIsWatchListOpen}
        />
      </Header>
      <Main>
        <WatchList movies={watchListMovies} isWatchListOpen={isWatchListOpen} />
        <MovieList movies={movies} />
      </Main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [popular, setPopular] = useState();
  const [filtered, setFiltered] = useState();
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = await response.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  if (!popular) return null;

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map(({ id, title, poster_path, vote_average }) => (
            <MovieCard
              key={id}
              title={title}
              posterPath={poster_path}
              vote={vote_average}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

import { motion } from "framer-motion";

export default function MovieCard({ title, posterPath, vote }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`}
        alt={title}
      />
      <h2>{`${title} | ${vote}`}</h2>
    </motion.div>
  );
}

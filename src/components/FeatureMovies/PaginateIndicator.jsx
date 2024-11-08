// import PropTypes  from "prop-types";

const PaginateIndicator = ({ movies, activeMovieId, setactiveMovieId }) => {
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer rounded ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
              onClick={() => setactiveMovieId(movie.id)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};
export default PaginateIndicator;

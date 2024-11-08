import { useEffect, useState } from "react";

import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";

const FeatureMovies = () => {
  const [activeMovieId, setactiveMovieId] = useState();

  const { data: movieData, isLoading } = useFetch({
    url: `/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
  });
  const movies = (movieData.results || []).slice(0, 4);

  const { data: videoRespone } = useFetch(
    { url: `/movie/${activeMovieId}/videos` },
    { enabled: !!activeMovieId },
  );

  useEffect(() => {
    setactiveMovieId(movies[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            trailerVideoKey={
              (videoRespone?.results || []).find(
                (video) => video.type === "Trailer" && video.site === "YouTube",
              )?.key
            }
          />
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setactiveMovieId={setactiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;

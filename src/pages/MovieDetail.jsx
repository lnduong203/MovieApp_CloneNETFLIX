import { useParams } from "react-router-dom";

import Banner from "../components/MediaDetails/Banner";
import Loading from "../components/Loading";
import ActorList from "../components/MediaDetails/ActorList";
import RelatedMediaList from "../components/MediaDetails/RelatedMediaList";
import MovieInfor from "../components/MediaDetails/MovieInfor";
import { useFetch } from "../hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfor, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=credits,videos`,
  });
  const { data: relatedMovie, isLoading: isRealatedMovieLoading } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  if (isLoading) {
    return <Loading />;
  }

  const crews = (movieInfor.credits?.crew || []).filter((crew) =>
    ["Director", "Writer", "Screenplay"].includes(crew.job),
  );

  return (
    <div>
      <Banner
        title={movieInfor.title}
        backdropPath={movieInfor.backdrop_path}
        posterPath={movieInfor.poster_path}
        crews={crews}
        releaseDate={movieInfor.release_date}
        genres={movieInfor.genres}
        voteAverage={movieInfor.vote_average}
        overView={movieInfor.overview}
        trailerVideoKey={
          (movieInfor.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />

      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieInfor.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie.results || []}
              isLoading={isRealatedMovieLoading}
              title="More Like This"
            />
          </div>
          <div className="flex-1">
            <MovieInfor movieInfor={movieInfor} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;

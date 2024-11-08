import { useParams } from "react-router-dom";

import Banner from "../components/MediaDetails/Banner";
import Loading from "../components/Loading";
import ActorList from "../components/MediaDetails/ActorList";
import RelatedMediaList from "../components/MediaDetails/RelatedMediaList";
import { useFetch } from "../hooks/useFetch";
import TVShowInfor from "../components/MediaDetails/TVShowInfor";
import SeasonList from "../components/MediaDetails/SeasonList";

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfor, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=aggregate_credits,videos`,
  });
  const { data: relatedMovie, isLoading: isRealatedMovieLoading } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  if (isLoading) {
    return <Loading />;
  }

  // console.log({ crewHaha: tvInfor.aggregate_credits?.crew });
  const crews = (tvInfor.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer", "Screenplay"].some((job) =>
        jobs.find((j) => j === job),
      );
    })
    .slice(0, 10)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  return (
    <div>
      <Banner
        title={tvInfor.name}
        backdropPath={tvInfor.backdrop_path}
        posterPath={tvInfor.poster_path}
        crews={crews}
        releaseDate={tvInfor.last_air_date}
        genres={tvInfor.genres}
        voteAverage={tvInfor.vote_average}
        overView={tvInfor.overview}
        trailerVideoKey={
          (tvInfor.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfor.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />
            <SeasonList seasons={(tvInfor.seasons || []).reverse()} />
            <RelatedMediaList
              mediaList={relatedMovie.results || []}
              isLoading={isRealatedMovieLoading}
              title="More Like This"
            />
          </div>
          <div className="flex-1">
            <TVShowInfor tvInfor={tvInfor} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVShowDetail;

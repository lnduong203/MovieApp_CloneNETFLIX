import Loading from "../Loading";
import MovieCard from "../MovieCard";

const RelatedMediaList = ({ mediaList = [], isLoading, title }) => {
  return (
    <div>
      <p className="my-4 text-[1.4vw] font-bold">{title}</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              poster={media.poster_path}
              releaseDate={media.release_date || media.first_air_date}
              title={media.title || media.name}
              point={media.vote_average}
              mediaType={media.media_type || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default RelatedMediaList;

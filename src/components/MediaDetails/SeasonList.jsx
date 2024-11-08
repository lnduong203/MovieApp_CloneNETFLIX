import ImageComponent from "../Image";
import CircularProgressBar from "../CircularProgressBar";
import { useState } from "react";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentSeason = isShowMore ? seasons.slice(0, 20) : seasons.slice(0, 3);

  return (
    <div className="mt-8 text-[1.1vw]">
      <p className="mb-4 text-[1.5vw] font-bold">Seasons</p>
      {currentSeason.map((season) => (
        <div
          key={season.id}
          className="my-4  flex gap-7 rounded-lg border border-slate-200 p-3"
        >
          <ImageComponent
            src={season.poster_path && `https://media.themoviedb.org/t/p/w300${season.poster_path}`}
            width={130}
            height={195}
            className="   rounded-lg "
          />
          <div className="space-y-1 w-1/4">
            <p className="text-[1.3vw] font-bold">{season.name}</p>
            <div className="flex items-center gap-2">
              <p>Rating: </p>
              <CircularProgressBar
                percent={Math.round(season.vote_average * 10)}
                size={2.5}
                strokeWidth={0.25}
              />
            </div>
            <p>Release Date: {season.air_date}</p>
            <p>{season.episode_count} Episodes</p>
            <p>{season.overview}</p>
          </div>
        </div>
      ))}
      <p
        className="cursor-pointer text-[1vw]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};
export default SeasonList;

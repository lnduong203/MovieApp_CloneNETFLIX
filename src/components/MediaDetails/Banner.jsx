import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";

import CircularProgressBar from "../CircularProgressBar";
import { useModalContext } from "../context/ModalProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  crews,
  releaseDate,
  genres,
  voteAverage,
  overView,
  trailerVideoKey,
}) => {
  const { openPopup } = useModalContext();
  const groupCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
      />
      <div className="relative mx-auto flex max-w-7xl gap-6 px-6 py-8 lg:gap-8">
        <div className="flex-1">
          <img
            width={600}
            height={900}
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name + " ").join(", ")}</p>
          </div>
          <div className="my-4 flex gap-6">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(voteAverage * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[60vw]"
                  />,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 text-[1.3vw] font-bold">OverView</p>
            <p>{overView}</p>
          </div>
          <div className="mt-4 grid grid-cols-2">
            {Object.keys(groupCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p className="mb-5">
                  {groupCrews[job].map((crew) => crew.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

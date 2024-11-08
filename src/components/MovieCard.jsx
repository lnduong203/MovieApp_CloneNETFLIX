import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
// import Image from "./Image";
import ImageComponent from "./Image";

const MovieCard = ({ id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link
      to={`/${mediaType}/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute right-2 top-1 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )}
        <ImageComponent
          className="rounded-lg w-full"
          width={300}
          height={450}
          src={poster && `https://image.tmdb.org/t/p/original${poster}`}
        />
        
        <div className="relative -top-[1.5vw] px-4 text-[1.5vw] sm:text-[1.2vw]">
          <CircularProgressBar percent={Math.round((point || 0) * 10)} />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;

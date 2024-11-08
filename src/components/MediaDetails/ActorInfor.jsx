import { Link } from "react-router-dom";

import ImageComponent from "../Image";
import noImgActor from "/no_image.svg";

const ActorInfor = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-400 shadow-sm"
    >
      <ImageComponent
        className="rounded-t-lg"
        width={276}
        height={350}
        src={
          profilePath &&
          `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
        }
        alt="image actor"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p className="text-[1vw]">{character}</p>
        {episodeCount && (
          <p className="text-[0.9vw]">
            {/* {episodeCount} Episode{episodeCount >= 2 ? "s" : ""} */}
            {episodeCount >= 2
              ? `${episodeCount} Episodes`
              : `${episodeCount} Episode`}
          </p>
        )}
      </div>
    </Link>
  );
};
export default ActorInfor;

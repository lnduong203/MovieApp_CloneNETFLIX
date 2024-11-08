import { useState } from "react";
import ActorInfor from "./ActorInfor";
// import { Link } from "react-router-dom";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4">
        {currentActor.map((actor) => (
          // <Link  to={`/people/${actor.id}`}>
            <ActorInfor
              key={actor.id}
              id={actor.id}
              name={actor.name}
              character={actor.character}
              profilePath={actor.profile_path}
              episodeCount={actor.episodeCount}
            />
          // </Link>
        ))}
      </div>
      <p
        className="my-2 cursor-pointer text-[1vw]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : " Show More"}
      </p>
    </div>
  );
};
export default ActorList;

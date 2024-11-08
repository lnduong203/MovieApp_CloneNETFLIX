/* eslint-disable react/prop-types */
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ImageComponent from "../Image";
import { useModalContext } from "../context/ModalProvider";

const Movie = (props) => {
  const { openPopup } = useModalContext();
  const {
    data: { id, backdrop_path, title, release_date, overview },
    trailerVideoKey,
  } = props;

  return (
    <div>
      <ImageComponent
        src={backdrop_path && `https://image.tmdb.org/t/p/original${backdrop_path}`}
        width={1200}
        height={800}
        className="aspect-video w-full brightness-50"
      />
      <div className="absolute bottom-[15%] left-10 w-1/2 sm:w-1/3">
        <p className="mb-3 font-bold sm:text-[3vw]">{title}</p>
        <div>
          <p className="mb-2 inline-block border border-gray-400 p-2 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview} </p>
          </div>
          <div className="mt-4">
            <button
              className="mr-2 rounded bg-white px-4 py-2 text-[12px] text-black lg:text-lg"
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
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
            <Link to={`/movie/${id}`}>
              <button className="rounded bg-slate-300/35 px-4 py-2 text-[12px] lg:text-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }),
};
export default Movie;

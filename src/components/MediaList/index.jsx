import { useState } from "react";
import MovieCard from "../MovieCard";
import { useFetch } from "../../hooks/useFetch";

const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id); // dấu ? : option chaining. Khi truy xuất đến tab[0] nếu 
  //không có data thì dừng lại, không truy xuất đến .id nữa để tránh bị crash dữ liệu

  const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  const { data } = useFetch({ url });
  const mediaList = (data.results || []).slice(0, 12);

  return (
    <div className="bg-black px-10 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded-[3px] px-2 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6 lg:gap-7">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            id={media.id}
            poster={media.poster_path}
            releaseDate={media.release_date || media.first_air_date}
            title={media.title || media.name}
            point={media.vote_average}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};
export default MediaList;

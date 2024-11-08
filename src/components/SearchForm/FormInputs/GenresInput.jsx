import { useWatch } from "react-hook-form";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType },
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {onChange([])}, [mediaType])

  return (
    <div className="flex flex-wrap gap-1.5">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-md border px-2 py-1 text-[1vw] ${value.includes(genre.id) ? "bg-black/80 text-white" : ""} `}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...value, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};
export default GenresInput;

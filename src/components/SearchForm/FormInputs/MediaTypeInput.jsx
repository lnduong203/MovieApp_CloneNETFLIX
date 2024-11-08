// eslint-disable-next-line react/prop-types
const MediaTypeInput = ({ onChange, value, name }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        name={name}
        value="movie"
        checked={value === "movie"}
        onChange={onChange}
        id="sf-type-movie"
        className="mr-1"
      />
      <label htmlFor="sf-type-movie">Movie</label>
      <br />
      <input
        type="radio"
        name={name}
        value="tv"
        checked={value === "tv"}
        onChange={onChange}
        id="sf-type-tv"
      />
      <label htmlFor="sf-type-tv">TV Show</label>
      <br />
    </div>
  );
};
export default MediaTypeInput;

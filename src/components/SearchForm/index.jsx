import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      mediaType: ['movie', 'tv'].includes(mediaType) ? mediaType : 'movie',
      genres: [],
      rating: "All",
    },
  });

  const formValues = watch();

  useEffect(() => {
    setSearchFormValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValues)]);

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form className="space-y-4">
        <FormField
          control={control}
          label="Media Type"
          name="mediaType"
          Component={MediaTypeInput}
        />
        <FormField
          control={control}
          label="Genres"
          name="genres"
          Component={GenresInput}
        />
        <FormField
          control={control}
          label="Rating"
          name="rating"
          Component={RatingInput}
        />
      </form>
    </div>
  );
};
export default SearchForm;

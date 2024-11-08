import { currencyFormatter } from "../../libs/utils";

const MovieInfor = ({ movieInfor }) => {
  return (
    <div className="mx-8">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfor.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <div className="flex ">
          {(movieInfor.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="mt-3 mr-2 w-[2vw]"
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfor.status}</p>
        <div className="my-4">
          <p className="font-bold">Budget</p>
          <p>{currencyFormatter(movieInfor.budget)}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Revenue</p>
          <p>{currencyFormatter(movieInfor.revenue )}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieInfor;

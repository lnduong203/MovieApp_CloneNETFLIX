
const TVShowInfor = ({ tvInfor }) => {
  return (
    <div className="mx-8">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfor.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <div className="flex">
          {(tvInfor.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="mr-2 mt-3 w-[2vw]"
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfor.status}</p>
      </div>

      <div>
        <p className="font-bold">Networks</p>
        <div className="mt-1 flex">
          {(tvInfor.networks || []).map((network) => (
            <img
             className="w-[7vw] invert mt-1"
              key={network.id}
              src={`https://image.tmdb.org/t/p/h30${network.logo_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TVShowInfor;

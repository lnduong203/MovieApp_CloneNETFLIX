import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <HashLoader color="#df2929" size={50}  />
    </div>
  );
};
export default Loading;

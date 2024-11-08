import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-10 text-white lg:h-20">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link to="/">
            <img src="/netflix.png" alt="logo" className="w-20 sm:w-24" />
          </Link>
          <Link to="/search?mediaType=movie" className="hover:text-red-700 lg:text-lg">
            Movie
          </Link>
          <Link to="/search?mediaType=tv" className="hover:text-red-700 lg:text-lg">
            TV Show
          </Link>
        </div>
        <div>
          <Link to={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;

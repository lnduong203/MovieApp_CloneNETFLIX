import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TOPRATED_TABS, TRENDING_TABS } from "../libs/constants";

function HomePage() {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOPRATED_TABS} />
    </div>
  );
}

export default HomePage;

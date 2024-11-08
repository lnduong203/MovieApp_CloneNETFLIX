import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ImageComponent from "../components/Image";
import RelatedMediaList from "../components/MediaDetails/RelatedMediaList";
import { GENDER } from "../libs/constants";


const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  const [isShowMore, setIsShowMore] = useState(false);
  const currentPeople = isShowMore
    ? (peopleInfo.combined_credits?.cast || []).slice(0, 150)
    : (peopleInfo.combined_credits?.cast || []).slice(0, 12);

  return (
    <div className="bg-black text-white text-[1.2vw]">
      <div className="container sm:gap-10 gap-5">
        <div className="flex-1">
          <ImageComponent
            src={peopleInfo.profile_path &&`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`}
            width={600}
            height={900}
            className="mb-6"
          />
          <div className="space-y-2 sm:space-y-4">
            <p className="font-bold text-[1.5vw]">Personal Info</p>
            <div>
              <p className="font-bold">Known For</p>
              <p>{peopleInfo.known_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{GENDER[peopleInfo.gender]}</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>{peopleInfo.place_of_birth}</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>{peopleInfo.birthday}</p>
            </div>
          </div>
        </div>

        <div className="flex-[2]">
          <p className="mb-4 sm:mb-6 text-[2vw] font-bold">{peopleInfo.name}</p>
          <div className="mb-[40px]">
            <p className="mb-2 lg:mb-4 text-[1.3vw] font-bold">Biography</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <div>
            <RelatedMediaList
              mediaList={currentPeople || []}
              title="Know For"
            />
            <p
              className="my-2 cursor-pointer text-[1vw]"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? "Show Less" : " Show More"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeoplePage;

import React, { useState } from "react";
import Header from "../header/Header";
import shape from "../Images/Shape.svg";
import RegionPopup from "../popup/RegionPopup";
import MainCountries from "../countries/Main/MainCountries";
import search from "../Images/search.svg";

const MainWork: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <div className="border border-black w-[89%] m-auto my-12">
        <div className="xl:flex grid justify-between items-center">
          <div className="flex relative xl:w-[480px] w-full h-14 items-center rounded-md">
            <input
              className="bg-white shadow-xl w-full border h-full rounded-md px-16 outline-none"
              type="search"
              placeholder="Search for a country…"
            />
            <img className="absolute left-[25px]" src={search} />
          </div>
          <div className="h-14">
            <div
              onClick={() => setPopupVisible(!popupVisible)}
              className="flex bg-white shadow-md w-[200px] justify-center gap-11 h-14 items-center xl:mt-0 mt-10 cursor-pointer"
            >
              <h1
                onClick={() => {
                  setPopupVisible(!popupVisible);
                }}
                className="font-headerFont text-sm"
              >
                Filter By Region
              </h1>
              <img
                onClick={() => setPopupVisible(!popupVisible)}
                className="cursor-pointer"
                src={shape}
                alt="Shape"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end my-1">
          <div className="w-[195px]">
            <div className="w-[195px]">{popupVisible && <RegionPopup />}</div>
          </div>
        </div>
        <MainCountries />
      </div>
    </div>
  );
};

export default MainWork;

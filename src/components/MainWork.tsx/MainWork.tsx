import React, { useState } from "react";
import Header from "../header/Header";
import shape from "../Images/Shape.svg";
import RegionPopup from "../popup/RegionPopup";

const MainWork: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <div className="border border-black w-[91.8%] m-auto my-12">
        <div className="flex justify-between items-center">
          <div className="flex w-[480px] h-14 items-center">
            <input className="w-full border border-black" type="search" />
          </div>
          <div className="h-14">
            <div className="flex bg-white shadow-md w-[200px] justify-center gap-11 h-14 items-center">
              <h1 onClick={() => {
                alert("Click right side button!!")
              }} className="font-headerFont text-sm">Filter By Region</h1>
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
      </div>
    </div>
  );
};

export default MainWork;

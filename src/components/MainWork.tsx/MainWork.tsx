import React, { useState } from "react";
import Header from "../header/Header";
import RegionPopup from "../popup/RegionPopup";
import MainCountries from "../countries/Main/MainCountries";
import search from "../Images/search.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainWork: React.FC = () => {
  const [popupVisible,] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const notify = () => toast.error("Error please try again later!!");

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Header />
      <div className="w-[89%] m-auto my-12">
        <div className="xl:flex grid justify-between items-center">
          <div className="flex relative xl:w-[480px] w-full h-14 items-center rounded-md">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white shadow-xl w-full border h-full rounded-md px-16 outline-none"
              type="search"
              placeholder="Search for a country…"
            />
            <img className="absolute left-[25px]" src={search} />
          </div>
          <div onClick={notify} className="h-14">
          </div>
        </div>
        <div className="flex w-full justify-end my-1">
          <div className="w-[195px]">
            <div className="w-[195px]">{popupVisible && <RegionPopup />}</div>
          </div>
        </div>
        <MainCountries searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default MainWork;

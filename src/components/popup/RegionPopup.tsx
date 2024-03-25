const RegionPopup = () => {
  return (
    <div className="absolute w-full z-10">
      <div className="w-[200px] bg-white shadow-md px-5 font-headerFont mx-[-4px]">
        <h1 className="cursor-pointer text-black">Africa</h1>
        <h1 className="cursor-pointer">America</h1>
        <h1 className="cursor-pointer">Asia</h1>
        <h1 className="cursor-pointer">Europe</h1>
        <h1 className="cursor-pointer">Oceania</h1>
      </div>
    </div>
  );
};

export default RegionPopup;

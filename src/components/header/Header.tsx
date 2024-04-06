const Header = () => {

  return (
    <div className= "flex shadow-md items-center w-full py-10 justify-between font-headerFont xl:px-[102px] px-4">
      <h1
        className="xl:text-[24px] font-extrabold text-sm">
        Where in the world?
      </h1>
      <div className="flex items-center gap-2">
        <img className="cursor-pointer w-[100px]" src="https://logos.flamingtext.com/Word-Logos/countries-design-stripes-name.gif" alt="" />
      </div>
    </div>
  );
};

export default Header;
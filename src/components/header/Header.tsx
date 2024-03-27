import darkModeLogo from "../Images/dark-mode.svg";
import UseDarkMode from "../DarkMode/UseDarkMode";
const Header = () => {
  const [dark, toggleDarkMode] = UseDarkMode();

  return (
    <div
      className={`flex shadow-md w-full py-10 justify-between font-headerFont xl:px-[102px] px-4 ${
        dark ? "bg-white" : "bg-[#2B3844] shadow-md"
      }`}
    >
      <h1
        className={`xl:text-[24px] font-extrabold text-sm ${
          dark ? "text-[#111517]" : "text-[#FFFFFF]"
        }`}
      >
        Where in the world?
      </h1>
      <div onClick={toggleDarkMode} className="flex items-center gap-2">
        <img className="cursor-pointer" src={darkModeLogo} alt="" />
        <h1 className={`cursor-pointer xl:text-[16px] font-semibold text-[12px] select-none ${dark ? "text-[#111517]" : 'text-[#111517]'}`}>
          Dark Mode
        </h1>
      </div>
    </div>
  );
};

export default Header;

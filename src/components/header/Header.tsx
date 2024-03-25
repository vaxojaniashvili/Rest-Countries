import darkModeLogo from '../Images/dark-mode.svg'

const Header = () => {
  return (
    <div className="flex shadow-md bg-white w-full py-10 justify-between font-headerFont xl:px-[102px] px-4">
        <h1 className='xl:text-[24px] text-[#111517] font-extrabold text-sm'>Where in the world?</h1>
        <div className='flex items-center gap-2'>
            <img className='cursor-pointer' src={darkModeLogo} alt="" />
            <h1 className='cursor-pointer xl:text-[16px] text-[#111517] font-semibold text-[12px]'>Dark Mode</h1>
        </div>
    </div>
  )
}

export default Header;
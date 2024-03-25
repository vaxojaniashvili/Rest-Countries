import darkModeLogo from '../Images/dark-mode.svg'

const Header = () => {
  return (
    <div className="flex shadow-md bg-white w-full py-10 justify-between font-headerFont px-[102px]">
        <h1 className='text-[24px] text-[#111517] font-extrabold'>Where in the world?</h1>
        <div className='flex items-center gap-2'>
            <img className='cursor-pointer' src={darkModeLogo} alt="" />
            <h1 className='cursor-pointer text-[#111517] font-semibold'>Dark Mode</h1>
        </div>
    </div>
  )
}

export default Header;
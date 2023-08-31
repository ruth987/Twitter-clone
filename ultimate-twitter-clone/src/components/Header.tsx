const Header = () => {
  return (
    <div className="fixed w-[41%] border border-gray-800 text-gray-100 ml-52">
      <h3 className='text-lg font-bold p-2 '>Home</h3>

          <div className='flex justify-evenly'>
            <button className='text-xs font-semibold w-1/2 hover:bg-white/10 transition duration-200 border border-black border-b-cyan-400 h-12 '> For you </button>  
            <button className='text-xs text-gray-400  w-1/2 hover:bg-white/10 transition duration-200 border border-black h-12'> Following </button>
          </div>
    </div>
  );
};


export default Header;
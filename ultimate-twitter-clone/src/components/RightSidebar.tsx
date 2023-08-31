import { RiSearchLine } from "react-icons/ri";

const RightSidebar = () => {
  return (
    <section className="flex flex-col items-center w-[30%] space-y-5 py-3">

          <div className="relative">
            
            <input 
              className="w-full bg-gray-800 rounded-full px-3 py-2 pl-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
              type="text" 
              placeholder="Search"
            />
            <RiSearchLine 
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
            />

          </div>
        </section>
  );
};


export default RightSidebar;
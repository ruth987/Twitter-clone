
import Link from 'next/link';
import Image from 'next/image';
import LeftSidebar from '@/components/LeftSidebar';

import { BiWorld } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <div className="w-[1100px] bg-black flex mx-auto">
      <div className="flex w-full">
        {/* left section */}
        <LeftSidebar />
        {/* main part */}

        <main className='flex flex-col w-[50%] border border-gray-800 text-gray-100'>

          <h3 className='text-lg font-bold p-2 '>Home</h3>

          <div className='flex justify-evenly'>
            <div className='text-xs font-semibold text-cyan-400'> For you </div>  
            <div className='text-xs text-gray-400'> Following </div>
          </div>

          <hr className="border-cyan-400 border-t-2 mt-2 w-1/2"/>

          {/* new post */}
          <div className='flex space-y-3'>
            <div className='pt-5 px-4'>
              <Image
                src='/profile.jpeg'
                alt='profile image'
                width={40}
                height={50}
                className='rounded-full ring-2 ring-cyan-600'
              />

            </div>
            <div className='relative'>
                <input type="text"
                placeholder='What is happening?!'
                className='text-xl text-gray-500 bg-black border border-none hover:border-gray-700 rounded-fill' />
                <h6 className='text-xs text-cyan-600 pl-6'>Everyone can reply</h6>
                <BiWorld size={20} className='text-cyan-600 absolute top-2/3 -translate-y-1/2 pt-2'/>
                <hr className='border border-gray-600'/>
            </div>
          </div>

          <hr className='border border-gray-600'/>
          
          {/* already posted posts */}
          
        </main>
        {/* right section */}
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
      </div>
    </div>
    </div>
  );
}
"use client"

import Link from 'next/link';
import Image from 'next/image';
import LeftSidebar from '@/components/LeftSidebar';

import { BiWorld } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import {BsChevronCompactDown} from 'react-icons/bs';
import {BsCardImage} from 'react-icons/bs';
import {GrEmoji} from 'react-icons/gr';
import {MdOutlineGifBox} from 'react-icons/md';
import {GrLocation} from 'react-icons/gr';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [optionn, setOptionn] = useState<string>('Everyone');

  const options = [
    ' Everyone',
    ' Followers',
  ]
  const handleClick = (option : string) => {
    setOpen(!open);
    setOptionn(option);
  };

  return (
    <div className='bg-black text-white'>
      <div className="w-[1100px] bg-black flex mx-auto">
      <div className="flex w-full">
        {/* left section */}
        <LeftSidebar />
        {/* main part */}

        <main className='flex flex-col w-[51%] border border-gray-800 text-gray-100'>
          {/* header */}
          <div className=' fixed flex flex-col w-[41%] border border-gray-800 text-gray-100'>
            <h3 className='text-lg font-bold p-2 '>Home</h3>

          <div className='flex justify-evenly'>
            <button className='text-xs font-semibold w-1/2 hover:bg-white/10 transition duration-200 border border-black border-b-cyan-400 h-12 '> For you </button>  
            <button className='text-xs text-gray-400  w-1/2 hover:bg-white/10 transition duration-200 border border-black h-12'> Following </button>
          </div>

          </div>
          

          {/* new post */}
          <div className='flex space-x-4 mt-32 ml-3'>
            <div className=''>
              <Image
                src='/profile.jpeg'
                alt='profile image'
                width={50}
                height={50}
                className='w-10 h-10 rounded-full ring-2 ring-cyan-400'
              />

            </div>
            
            <div className='flex flex-col space-y-3 '>
              {/* drop down */}
              <div className="relative">
      
              <button 
                className="flex items-center px-3 py-2 text-xs text-cyan-500 rounded-full border border-gray-400 h-4 w-24 font-semibold"
                onClick={() => setOpen(!open)}
              >
                {optionn}
                <BsChevronCompactDown size={40} className='ml-2 font-bold '/>

              </button>

              {open && (
                <div className="absolute  mt-2 py-1 bg-black rounded-md shadow-xl w-36 z-20">
                  {options.map(option => (
                    <div
                      key={option}
                      className="text-xs py-2 px-6 text-white block hover:bg-white/10 rounded-md"
                      onClick={() => handleClick(option)}
                      
                    >
                      {option} 
                    </div>
                  ))}
                </div>
              )}

            </div>
            {/* input */}
            <div className='flex flex-col w-full space-y-3 '>
                <input type="text"
                placeholder='What is happening?!'
                className='bg-black focus:outline-none' />
                <div className='flex items-center '>
                  <div><BiWorld size={20} className='text-cyan-500'/></div>
                  <div><h6 className='text-xs pl-1 text-cyan-500 font-bold'>Everyone can reply</h6></div>

                </div>
                

            </div>
            <hr className='py-0 border-gray-900 w-96 pr-3'/>
            <div className='flex justify-between'>
              {/* icons */}
              <div className='flex space-x-2'>
                <div><BsCardImage size={20} className='text-cyan-500'/></div>
                <div><MdOutlineGifBox size={20} className='text-cyan-500'/></div>
                <div><GrEmoji size={20} className='text-cyan-500'/></div>
                <div><GrLocation size={20} className='text-cyan-500'/></div>
              </div>
              {/* post button */}
              <div>
                <button className='bg-cyan-600 hover:bg-opacity-70 text-white text-md text-center rounded-full h-10 w-28  px-2 font-bold'>
                  Tweet
                </button>

              </div>
            </div>
          </div>


            </div>
            
          <hr className='mt-2 border-gray-900'/>
          
          {/* already posted posts */}
         <div className="flex flex-col">

  {Array.from({ length: 5 }).map((_, i) => (

    <div 
      key={i} // Key should be unique
      className="border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4"  
    >

      <div>
        <div className="w-10 h-10 bg-slate-200 rounded-full" />
      </div>

      <div className="flex flex-col space-y-4">
        
        <div className="flex items-center space-x-1">
          {/* content */} 
        </div>

        <div className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt
          fugit id autem mollitia vero cum officia animi ipsa. 
        </div>
        <div className='bg-slate-400 expect-square w-full h-96 rouded-xl '>

        </div>
        <div className='flex items-center space-x-2 w-full'>
          <div>C</div>
          <div>R</div>
          <div>L</div>
          <div>S</div>
          <div>SH</div>
        </div>
        
      </div>

    </div>

  ))}
  
</div>
          
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
"use client"

import Link from 'next/link';
import Image from 'next/image';
import LeftSidebar from '@/components/LeftSidebar';
import Header from '@/components/Header';

import { BiWorld } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import {BsChevronCompactDown} from 'react-icons/bs';
import {BsCardImage} from 'react-icons/bs';
import {GrEmoji} from 'react-icons/gr';
import {MdOutlineGifBox} from 'react-icons/md';
import {GrLocation} from 'react-icons/gr';
import NewTweetForm from './NewTweetForm';

const MainContent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [optionn, setOptionn] = useState<string>('Everyone');
  const options = ['Everyone', 'Followers'];

  const handleClick = (option : string) => {
    setOpen(!open);
    setOptionn(option);
  };

  return (
    <main className="flex flex-col w-[51%] border border-gray-800 text-gray-100">
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
            <NewTweetForm />
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
  );
};


export default MainContent;
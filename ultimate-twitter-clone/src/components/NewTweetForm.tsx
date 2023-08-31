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

const NewTweetForm = () => {
  return (
    <div>
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
  )
}

export default NewTweetForm

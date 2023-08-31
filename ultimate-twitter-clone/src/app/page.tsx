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
import MainContent from '@/components/MainContent';
import RightSidebar from '@/components/RightSidebar';

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
        <Header />

        <MainContent />
        {/* right section */}
        <RightSidebar />
      </div>
    </div>
    </div>
  );
}
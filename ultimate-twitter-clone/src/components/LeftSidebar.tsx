import { BiHomeCircle } from 'react-icons/bi';
import { FaHashtag, FaTwitterSquare } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { FiMail } from 'react-icons/fi';
import { PiBookmarkSimpleBold } from 'react-icons/pi';
import { BsTwitter, BsPerson } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import {MdCircleNotifications} from 'react-icons/md';
import {RiSearchLine} from 'react-icons/ri';
import {SlOptions} from 'react-icons/sl';
import {BiWorld} from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'
import Link from 'next/link';
import Image from 'next/image';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: FaHashtag,
  },
  {
    title: 'Notification',
    icon: MdCircleNotifications,
  },
  {
    title: 'Message',
    icon: FiMail,
  },
  {
    title: 'Bookmarks',
    icon: PiBookmarkSimpleBold,
  },
  {
    title: 'Twitter Blue',
    icon: FaTwitterSquare,
  },
  {
    title: 'Profile',
    icon: BsPerson,
  },
  {
    title: 'More',
    icon: CgMoreO,
  }
];

const LeftSidebar = () => {
  return (
   <section className="flex flex-col text-white  h-screen  w-[20%] justify-between">
        <div className='space-y-2'>
          {NAVIGATION_ITEMS.map(item => (
            <div key={item.title} className="flex items-center py-2 px-3 rounded-full hover:bg-white/20 transition duration-200  hover: max-w-fit">
              
              <div className="mr-2">
                <item.icon className="w-6 h-6" />  
              </div>

              <span className="text-sm">
                {item.title !== "Twitter" && item.title}
              </span>
              
            </div>
          ))}
          {/* post button */}
          <button className='bg-cyan-600 hover:bg-opacity-70 text-white text-md text-center rounded-full h-10 py-2 px-2 w-[86%] font-bold'>
            Tweet 
          </button>
         
        

        </div>
          
            {/* profile card */}
           <div className=" hover:bg-white/10 w-56 rounded-full p-4 flex space-x-4 items-center h-16 mb-4">
      
              <Image 
                src="/profile.jpeg"
                width={40}
                height={40}
                alt='profile image'
                className="w-12 h-12 rounded-full ring-2 ring-cyan-400"
              />

              <div className="flex-1">
                <h4 className="font-medium text-sm">Ruth Wossen</h4>
                <p className="text-xs text-gray-500">@akravruth</p>
              </div>

              <SlOptions 
                className="text-gray-300 h-4 w-4" 
              />

    </div>
        </section>
  )
}

export default LeftSidebar

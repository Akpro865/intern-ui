import Search from './Search'
import { RiHome6Fill } from 'react-icons/ri'
import { TbTrees, TbClockPlay } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import { MdOutlineMarkUnreadChatAlt, MdOutlineInterests, MdNotificationsActive } from 'react-icons/md'
import { FiPlayCircle, FiChevronDown } from 'react-icons/fi'
import profile from '../assets/profile.jpeg'

function Navbar() {
  return (
    <div className='flex'>
      <section className='flex items-center flex-1'>
        <div className='w-1/6'>
          <RiHome6Fill />
        </div>
        <Search />
      </section>

      <div className='flex-1 flex items-center text-[28px]'>
       <div className='flex flex-1 items-center'>        
        <TbTrees />
        <div className='flex flex-col'>
         <span className='text-[14px]'>Roots</span>
         <span className='text-[12px]'>Connect Friends</span>
        </div>
       </div>
       <div className='flex flex-1 items-center'>        
        <TbClockPlay />
        <div className='flex flex-col'>
         <span className='text-[14px]'>Kicks</span>
         <span className='text-[12px]'>Short Videos</span>
        </div>
       </div>
       <div className='flex flex-1 items-center'>        
        <SlCalender />
        <div className='flex flex-col'>
         <span className='text-[14px]'>U-Meet</span>
         <span className='text-[12px]'>Create Events</span>
        </div>
       </div>        
      </div>

      <div className='flex-1'>
       <div className='flex items-center justify-evenly text-[26px]'>
        <span className='flex flex-col items-center'>
         <BsPeopleFill className=''/>
         <span className='text-[12px]'>Friends</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdOutlineMarkUnreadChatAlt />
         <span className='text-[12px]'>Chat</span>
        </span>
        <span className='flex flex-col items-center'>
         <FiPlayCircle />
         <span className='text-[12px]'>U-Stream</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdOutlineInterests />
         <span className='text-[12px]'>Interests</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdNotificationsActive />
         <span className='text-[12px]'>Notifications</span>
        </span>
        <span>
          <img src={profile} className='w-9 h-9 rounded-full object-cover' />
        </span>
       </div>
      </div>
    </div>
  )
}

export default Navbar
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
    <div className='flex pt-2'>
      <section className='flex items-center flex-1 border-b-[6px]'>
        <div className='w-1/6 pl-6 flex justify-center text-4xl text-blue-800'>
          <RiHome6Fill />
        </div>
        <Search />
      </section>

      <div className='flex-1 flex bg-[#e4e7ec] rounded-t-md pb-[6px]'>
       <div className='flex flex-1 items-center bg-[#cdcdcd] mx-1 ml-2 mt-2 rounded-t-md'>        
        <TbTrees className='mx-2 h-8 w-8 text-gray-700'/>
        <div className='flex flex-col'>
         <span className='text-[14px] text-gray-700 font-semibold'>Roots</span>
         <span className='text-[11px]'>Connect Friends</span>
        </div>
       </div>
       <div className='flex flex-1 items-center bg-[#cdcdcd] mx-1 mt-2 rounded-t-md'>        
        <TbClockPlay className='mx-2 h-8 w-8 text-gray-700'/>
        <div className='flex flex-col'>
         <span className='text-[14px] text-gray-700 font-semibold'>Kicks</span>
         <span className='text-[11px]'>Short Videos</span>
        </div>
       </div>
       <div className='flex flex-1 items-center bg-[#cdcdcd] mx-1 mt-2 mr-2 rounded-t-md'>        
        <SlCalender className='mx-2 h-8 w-8 text-gray-700'/>
        <div className='flex flex-col'>
         <span className='text-[14px] text-gray-700 font-semibold'>U-Meet</span>
         <span className='text-[11px]'>Create Events</span>
        </div>
       </div>        
      </div>

      <div className='flex-1 text-[#707070] border-b-[6px]'>
       <div className='flex items-center justify-evenly text-[26px]'>
        <span className='flex flex-col items-center'>
         <BsPeopleFill className=''/>
         <span className='text-[12px]'>Friends</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdOutlineMarkUnreadChatAlt />
         <span className='text-[11px]'>Chat</span>
        </span>
        <span className='flex flex-col items-center'>
         <FiPlayCircle />
         <span className='text-[11px]'>U-Stream</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdOutlineInterests />
         <span className='text-[11px]'>Interests</span>
        </span>
        <span className='flex flex-col items-center'>
         <MdNotificationsActive />
         <span className='text-[11px]'>Notifications</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={profile} className='w-9 h-9 rounded-full object-cover' />
          <FiChevronDown className='text-[14px]'/>
        </span>
       </div>
      </div>
    </div>
  )
}

export default Navbar
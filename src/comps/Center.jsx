import back from '../assets/back.jpg'
import profile from '../assets/profile.jpeg'
import { AiOutlineEye, AiFillHeart } from 'react-icons/ai'
import { BsThreeDotsVertical, BsFillHeartFill } from 'react-icons/bs'
import { GoUnmute } from 'react-icons/go'
import { MdOutlineComment } from 'react-icons/md'
import { RiShareForwardFill } from 'react-icons/ri'

function Center() {
  return (
    <div className='w-3/12 p-2 border border-gray-600 flex flex-col justify-between'>
    <section className=''>
     <div className='flex justify-between'>      
      <div className='flex items-center'>
       <div>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>
       <div className='flex flex-col justify-center'>
        <div>
         <span className='font-semibold px-2'>Ajithkumar V</span>
         <span className='text-[10px]'>2 hours ago</span>
        </div>
        <div className='flex px-2'>
         <AiOutlineEye className=''/>
         <span className='text-[12px] px-2'>46 views</span>
        </div>
       </div>
      </div>

      <span>
       <BsThreeDotsVertical className='text-3xl'/>
      </span>
     </div>
    </section>

    <section className='flex justify-end mr-4 mb-2'>
     <div className='flex flex-col'>
      <div className='my-1 flex flex-col items-end'>
       <GoUnmute className='text-4xl bg-white text-gray-500 p-1 rounded-full'/>
       <span className='text-[12px] mt-0.5'>mute</span>
      </div>
      <div className='my-1 flex flex-col items-end'>
       <AiFillHeart className='text-4xl bg-white text-red-500 p-1 rounded-full'/>
       <span className='text-[12px] mt-0.5'>3 likes</span>
      </div>
      <div className='my-1 flex flex-col items-end'>
       <MdOutlineComment className='text-4xl bg-white text-gray-500 p-1 rounded-full'/>
       <span className='text-[12px] mt-0.5'>2 comments</span>
      </div>
      <div className='my-1 flex flex-col items-end'>
       <RiShareForwardFill className='text-4xl bg-white text-gray-500 p-1 rounded-full'/>
       <span className='text-[12px] mt-0.5'>share</span>
      </div>
     </div>
    </section>
    </div>
  )
}

export default Center

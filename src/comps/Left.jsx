import '../App.css'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'

function Left() {
  const [followBtn, setFollowBtn] = useState(true)

  return (
    <div className='w-3/12 flex flex-col justify-center items-center'>
     <span className={`py-2 my-3 ${followBtn ? 'bg-orange-400 rounded-xl px-4 font-semibold py-2' : ''} `}>Following</span>
     <span className='py-3'>Latest</span>
     <span className='py-3'>Trending</span>
     <div className='flex py-3'>
      <span className='bg-[#6e6f6f] p-2 rounded-full mx-2'>
       <AiOutlineSearch className='text-xl'/>
      </span>
      <span className='bg-[#6e6f6f] p-2 rounded-full mx-2'>
       <HiPlus className='text-xl'/>
      </span>
     </div>
    </div>
  )
}

export default Left
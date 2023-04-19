import '../App.css'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'

function Left({ chooseCategory, category }) {
  const [followBtn, setFollowBtn] = useState(true)

  return (
    <div className='w-3/12 flex flex-col justify-center items-center'>
     <span className={`py-2 my-3 cursor-pointer ${followBtn ? 'bg-orange-400 rounded-xl px-4 font-semibold py-2' : ''} `}>Following</span>
     <span className='py-3 cursor-pointer'>Latest</span>
     <span className='py-3 cursor-pointer'>Trending</span>
     <div className='flex py-3'>
      <span className='bg-[#6e6f6f] p-2 rounded-full mx-2 cursor-pointer'>
       <AiOutlineSearch className='text-xl'/>
      </span>
      <span className='bg-[#6e6f6f] p-2 rounded-full mx-2 cursor-pointer' onClick={() => chooseCategory(true)}>
       <HiPlus onClick={()=>setFollowBtn(false)} className='text-xl'/>
      </span>
     </div>
    </div>
  )
}

export default Left
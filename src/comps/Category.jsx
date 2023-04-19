import { useState } from 'react'
import { Link } from 'react-router-dom'
import { videos } from '../config/db'
import { TbCategory } from 'react-icons/tb'
import { HiPlus } from 'react-icons/hi'
import Select from './Select'

function Category({ setCategory }) {
  const [choose, setChoose] = useState(false)
  const [singlepost, setSinglePost] = useState(false)

  const chooseSelect = (choose) => {
    setChoose(choose);
  };

  const goToSinglePost = ()=>{
    setCategory(false)
  }
  return (
   <section className={`w-[530px] relative`}>
    <div className='flex justify-between my-2 items-center'>
     <span className='w-1/6 flex justify-center items-center'>
      <TbCategory className='text-3xl p-1 bg-[#6e6f6f] rounded-full cursor-pointer'/> 
     </span>
     <span className='w-4/6'>
      <input className='h-9 px-3 w-full outline-none rounded-md text-black' type='search' placeholder='search..'/>
     </span>
     <span className='w-1/6 flex justify-center items-center'>
       <HiPlus onClick={()=>setChoose(true)} className='text-3xl p-1 bg-[#6e6f6f] rounded-full cursor-pointer'/>
     </span>
    </div>

    <div className='grid h-[530px] justify-items-center p-2 rounded-lg grid-cols-3 gap-1 w-full flex bg-white'>
     {
     	videos.map((video, i) =>(
        <Link to='/post/1' onClick={()=>goToSinglePost} className='h-40 w-[150px] bg-green-200 overflow-hidden rounded-md'>
       	  <video width="100%" height="100%" controls className='block'>
  		     <source src={video} type="video/mp4" />
  		    </video>
        </Link>
     	))
     }
    </div>

    {
      choose ? <Select chooseSelect={chooseSelect} /> : null
    }
   </section>
  )
}

export default Category
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  return (
    <div className='w-5/6 flex justify-center'>
     <div className='w-4/6 bg-gray-200 flex items-center justify-center rounded-[9px]'>
       <input type='search' placeholder='Search...' className='w-full bg-gray-200 rounded-[9px] outline-none h-8 px-2' />
       <AiOutlineSearch className='mx-1.5 text-[17px]'/>
     </div>
    </div>
  )
}

export default Search
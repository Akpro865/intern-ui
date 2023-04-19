import { categories } from '../config/db'

function Select({ chooseSelect }) {
  return (
    <section className='absolute top-[130px] h-[390px] left-[120px] px-4 rounded-md text-black bg-white'>
     <p className='flex justify-center py-3 border-b px-6'>Select your prefered kicks categories</p>
     <div className='py-1 relative'>
      {
        categories.map((category,i)=>(
         <div className='py-1'>
          <input type='checkbox' id={category} className='accent-orange-600' />
          <label className='px-2' for={category} >{category}</label>
         </div>
        ))
      }
     </div>

     <div className='absolute bottom-0 py-3 w-full border-t px-2 left-0'>
      <div className='flex justify-center'>
       <span onClick={()=>chooseSelect(false)} className='px-12 py-1 cursor-pointer hover:bg-orange-500 text-white bg-orange-400 font-medium mx-2 rounded-md'>save</span>
       <span onClick={()=>chooseSelect(false)} className='px-12 py-1 border cursor-pointer border-orange-400 text-orange-500 mx-2 font-medium rounded-md'>cancel</span>
      </div>
     </div>
    </section>
  )
}

export default Select
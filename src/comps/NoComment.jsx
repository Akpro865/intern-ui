import { MdOutlineMusicNote } from 'react-icons/md'
import '../App.css'

function NoComment() {

  return (
    <section className='w-5/12 mx-4 flex items-center justify-center flex-col'>
     <div className='font-semibold mt-2 w-11/12'>
      <span className='mx-1'>#nature_lover</span>
      <span className='mx-1'>#save_nature</span>
     </div>

     <p className='my-1 text-[15px] w-11/12'>"Nature is a great good thing created by naturally, everyone need to save the earth. Once we loose we cannot get back ever."</p>

     <div className='my-3 flex items-center w-10/12'>
      <span className='bg-white font-medium px-2 py-0.5 rounded-md text-black'>@music</span>
      <MdOutlineMusicNote className='mx-3 text-3xl text-purple-500'/>
      <span>oh oh kadhal en kaviyae</span>
     </div>

  </section>
  )
}

export default NoComment
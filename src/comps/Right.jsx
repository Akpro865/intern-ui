import { MdOutlineMusicNote } from 'react-icons/md'
import { TiArrowBack } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import profile from '../assets/profile.jpeg'

function Right() {
  return (
    <section className='w-5/12 m-5'>
     <div className='font-semibold w-10/12'>
      <span className='mx-1'>#nature_lover</span>
      <span className='mx-1'>#save_nature</span>
     </div>

     <p className='my-2 text-[15px] w-10/12'>"Nature is a great good thing created by naturally, everyone need to save the earth. Because once we loose we cannot get back ever."</p>

     <div className='my-4 flex items-center w-11/12'>
      <span className='bg-white font-medium px-2 py-0.5 rounded-md text-black'>@music</span>
      <MdOutlineMusicNote className='mx-3 text-3xl text-purple-500'/>
      <span>oh oh kadhal en kaviyae</span>
     </div>

     <section className='w-11/12 bg-white text-black rounded-md p-1'>
      <div className='my-2 flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-[#f3f6f8] w-4/6 p-2 rounded-md'>        
        <div className=''>
         <span className='font-semibold'>Jessica</span>
         <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
        </div>
        <div className='flex justify-between items-end'>
          <span className='text-[15px]'>Writing something....</span>
          <div className='text-[11px]'>
           <span className='px-1'>3 likes</span>
           <span>2 replies</span>
          </div>
        </div>
       </div>

       <div className='w-1/6 pl-2 text-[#666666]'>
        <AiFillHeart className='text-2xl'/>
        <TiArrowBack className='text-2xl'/>
       </div>
      </div>

      <div className='my-2 flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-blue-100 w-4/6 p-2 rounded-md'>        
        <div className=''>
         <span className='font-semibold'>Jon D</span>
         <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
        </div>
        <div className='flex justify-between items-end'>
          <span className='text-[15px]'>Music lover</span>
          <div className='text-[11px]'>
           <span className='px-1'>3 likes</span>
           <span>2 replies</span>
          </div>
        </div>
       </div>

       <div className='w-1/6 pl-2 text-[#666666]'>
        <AiFillHeart className='text-2xl'/>
        <TiArrowBack className='text-2xl'/>
       </div>
      </div>

                  <section className='pl-[56px]'>
                    <div className='my-2 flex items-center'>
                     <div className='w-1/5 flex justify-center'>
                      <img src={profile} className='w-10 h-10 rounded-full object-cover' />
                     </div>
                        <div className='bg-[#f3f6f8] w-3/5 p-2 rounded-md'>        
                          <div className=''>
                           <span className='font-semibold'>Sonia M</span>
                           <span className='text-[10px] px-1'>Apr 29, 2023 at 8.30am</span>
                          </div>
                          <div className='flex justify-between items-end'>
                            <span className='text-[15px]'>well send @jessica</span>
                            <div className='text-[11px]'>
                             <span className='px-1'>3 likes</span>
                             <span>2 replies</span>
                            </div>
                          </div>
                         </div>

                         <div className='w-1/5 px-2 text-[#666666]'>
                          <AiFillHeart className='text-2xl'/>
                         </div>
                      </div>
                    </section>
                    <section className='pl-[56px]'>
                    <div className='my-2 flex items-center'>
                     <div className='w-1/5 flex justify-center'>
                      <img src={profile} className='w-10 h-10 rounded-full object-cover' />
                     </div>
                        <div className='bg-[#f3f6f8] w-3/5 p-2 rounded-md'>        
                          <div className=''>
                           <span className='font-semibold'>Prokumar S</span>
                           <span className='text-[10px] px-1'>Apr 29, 2023 at 8.30am</span>
                          </div>
                          <div className='flex justify-between items-end'>
                            <span className='text-[15px]'>great one @jessica</span>
                            <div className='text-[11px]'>
                             <span className='px-1'>3 likes</span>
                             <span>2 replies</span>
                            </div>
                          </div>
                         </div>

                         <div className='w-1/5 px-2 text-[#666666]'>
                          <AiFillHeart className='text-2xl'/>
                         </div>
                      </div>
                    </section>


      <div className='my-2 flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-[#f3f6f8] w-4/6 p-2 rounded-md'>        
        <div className=''>
         <span className='font-semibold'>Jessica</span>
         <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
        </div>
        <div className='flex justify-between items-end'>
          <span className='text-[15px]'>I love play cricket</span>
          <div className='text-[11px]'>
           <span className='px-1'>3 likes</span>
           <span>2 replies</span>
          </div>
        </div>
       </div>

       <div className='w-1/6 px-2 text-[#666666]'>
        <AiFillHeart className='text-2xl'/>
        <TiArrowBack className='text-2xl'/>
       </div>
      </div>
   </section>

   <section className='w-10/12 my-2 flex justify-center items-center text-black'>
    <div className='w-11/12 flex justify-center items-center rounded-md bg-white'>
     <input className='w-full h-9 rounded-md outline-none pl-3'/>
     <span><IoSend className='text-blue-500 text-2xl mx-2 cursor-pointer'/></span>
    </div>
   </section>

  </section>
  )
}

export default Right
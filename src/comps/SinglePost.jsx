import { useState } from 'react'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import NoComment from './NoComment'
import '../App.css'

function SinglePost() {
  const [comments, setComments] = useState(false)

  return (
   <>
    <div className='flex bg-black fullScreen text-white'>
     <Left />
     <Center />
     <NoComment />           
    </div>
  </>
  )
}

export default SinglePost
import { useState } from 'react'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import '../App.css'

function Home() {
  const [category, setCategory] = useState(false)

  return (
    <div className='flex bg-black fullScreen text-white'>
     <Left />     
     <Center />
     <Right />     
    </div>
  )
}

export default Home
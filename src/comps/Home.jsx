import { useState } from 'react'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import Category from './Category'

import '../App.css'

function Home() {
  const [category, setCategory] = useState(false)

  const chooseCategory = (category) => {
    setCategory(category);
  };

  return (
   <>
    <div className='flex bg-black fullScreen text-white'>
     <Left chooseCategory={chooseCategory} category={category}/> 
     {
      category ? <Category /> :
      (
        <>
         <Center />
         <Right />
        </>
      )
     }            
    </div>
  </>
  )
}

export default Home
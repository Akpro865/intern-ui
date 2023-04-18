import Search from './Search'
import { RiHome6Fill } from 'react-icons/ri'
import { TbTrees } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'

function Navbar() {
  return (
    <div className='flex'>
      <section className='bg-green-100 flex items-center flex-1'>
        <div>
          <RiHome6Fill />
        </div>
        <Search />
      </section>

      <div className='flex-1'>
        <TbTrees />
      </div>

      <div className='flex-1'>
        <BsPeopleFill />
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Search from './components/header/Search/Search'

const Navbar = () => {
  return (
    <div className='flex  bg-slate-700 flex-col gap-10 p-4 text-white'>
        <div className='flex items-start w-[70%] m-auto font-semibold text-4xl'>
            StartUp
        </div>
        <div>
            TagLine
        </div>
        <Search/>
    </div>
  )
}

export default Navbar
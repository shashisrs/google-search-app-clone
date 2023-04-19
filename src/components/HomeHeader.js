import React from 'react';
import {TbGridDots} from 'react-icons/tb';
import {FaUserCircle} from 'react-icons/fa';
const HomeHeader = () => {
  return (
    <div className='flex justify-end px-5 py-3 items-center gap-4'>
      <div className='flex gap-2 '>
          <span className='cursor-pointer line-height text-[13px] text-black/[0.87] hover:underline'>Gmail</span>
          <span className='cursor-pointer line-height text-[13px] text-black/[0.87] hover:underline'>Images</span>
      </div>
      <div className='flex gap-2 items-center ml-3 justify-center'>
      <div className='flex items-center h-10 w-10 justify-center rounded-full hover:bg-black/[0.05]'>

          <TbGridDots size="22" color="#5f6368"/>
      </div>
          <div className=' flex justify-center items-center h-[32px] w-[32px] rounded-full'>
              <FaUserCircle className='h-8 w-8 text-blue-800'/>
          </div>
      </div>
    </div>
  )
}

export default HomeHeader
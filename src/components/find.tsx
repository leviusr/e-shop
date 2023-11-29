import React from 'react'
import { MdFindInPage } from "react-icons/md";

function Find() {
  return (
    <form  className='text-center flex flex-col justify-center items-center w-full h-full'>
      <h1 className='w-1/2 text-md text-start py-2 text-white font-semibold'>Encuentra Lo que deseas...</h1>
      <div className='relative flex items-center justify-center w-1/2 rounded-md drop-shadow-md'>
      <input type='texl' placeholder='...' className='px-3 w-full py-3 pr-20'  />
      <button type='submit' className='absolute right-5 text-primary'><MdFindInPage size={30} /></button>
      </div>
    </form>
  )
}

export default Find

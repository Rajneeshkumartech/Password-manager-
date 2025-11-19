import React from 'react'

const Header = () => {
  return (
    <>
    <div className='bg-black text-green-500 flex justify-around p-2 '>
        <div>
          <span className='text-2xl font-bold'>&lt;</span>
          <span className='text-xl font-bold text-white'>PassOP</span>
          <span className='text-2xl font-bold'>/&gt;</span>
        </div>
        <div>Github</div>
    </div>
    </>
  )
}

export default Header
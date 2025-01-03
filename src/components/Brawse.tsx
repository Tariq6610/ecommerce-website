import React from 'react'

const Brawse = () => {
  return (
    <div className='max-w-[1440px] 2xl:px-[100px] mx-auto xl:px-[50px] px-[16px] '>
    <div className='bg-[#F0F0F0] flex flex-col items-center justify-center pb-[76px]'>
      <h1 className='font-bold md:text-[48px] text-[28px] text-center md:text-start tracking-tight mt-[70px] mb-[64px] leading-8'>BROWSE BY DRESS STYLE</h1>
      <div className='grid xl:grid-cols-3 grid-cols-4 gap-[20px] w-full '
      style={{ gridAutoRows: '289px' }}
      >
        <div className='bg-green-400 xl:col-span-1 col-span-4 lg:col-span-2 relative '>
          <img className='w-full h-full object-cover' src="/browse/image 11.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Casual</h1>
        </div>
        <div className='bg-orange-400 relative  lg:col-span-2 col-span-4'>
        <img className='w-full h-full object-cover' src="/browse/image 13.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Formal</h1>
        </div>
        <div className='bg-blue-400 lg:col-span-2 col-span-4 relative'>
        <img className='w-full h-full object-cover' src="/browse/image 12.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Party</h1>
        </div>
        <div className='bg-pink-400 relative xl:col-span-1 lg:col-span-2 col-span-4'>
        <img className='w-full h-full object-cover' src="/browse/image 14.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[28px]'>Gym</h1>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Brawse
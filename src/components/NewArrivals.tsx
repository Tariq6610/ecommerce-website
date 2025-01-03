import React from 'react'
import ProductCard from './Product'
import { newProducts } from './items'
import Link from 'next/link'

const NewArrivals = () => {
  return (
    <>
    <div className=' max-w-[1440px] 2xl:px-[100px] mx-auto flex flex-col items-center gap-[55px] xl:px-[50px] px-[16px] mt-[72px]'>
        <h1 className='font-bold md:text-[48px] text-[28px] tracking-tight'>NEW ARRIVALS</h1>
        <div className='flex justify-between w-full overflow-x-scroll gap-[20px]'>
            {newProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} percentOff={product.percentOff} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars} rating={product.rating} image={product.image} id={product.id}/>
            ))}
        </div>
    <div className='flex justify-center mt-[36px]'>
      <Link href='/category'><button className='w-[218px] border h-[52px]  flex justify-center items-center rounded-[62px]'> view All</button></Link>
    </div>
    </div>
    </>
  )
}

export default NewArrivals
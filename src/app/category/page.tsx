import React from 'react'
import { allProducts } from '@/components/items'
import ProductCard from '@/components/Product'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Page = () => {
  return (
    <>
<div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[16px]'>
<div>
    <ul className='flex '>
        <li className='flex gap-[4px] object-cover'>Home <img className='object-contain' src="home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px] object-cover'>Casual<img className='object-contain' src="home/bracket.png" alt="" /></li>
    </ul>
</div>
<div>
    <div className='flex gap-[20px]'>
      <div className='w-[295px] px-[24px] py-[20px] h-[1220px] hidden lg:flex flex-col gap-[24px]'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Filters</h1>
          <img src="/home/filter.png" alt="" />
        </div>
        <hr />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between w-full '>
            <p>T-shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shorts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Hoodie</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Jeans</p>
            <img src="/home/bracket.png" alt="" />
          </div>
        </div>
        <hr />
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Price</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <img src="/home/Group 6.png" alt="" />
        <div className='flex justify-between px-[37px] font-bold'>
          <p>50%</p>
          <p>200%</p>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-[20px]'>Colors</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='h-[90px] flex gap-[16px] flex-wrap'>
          <div className='w-[32px] h-[32px] rounded-full bg-green-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-red-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-yellow-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-orange-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-blue-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-blue-700'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-purple-600'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-pink-500'></div>
          <div className='w-[32px] h-[32px] rounded-full border-2 bg-white'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-black'></div>
        </div>
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Size</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='flex flex-wrap gap-[8px]'>
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>XX-Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>X-Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Medium</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>X-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>XX-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>3X-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>4X-Large</div>   
        </div>
        <hr />
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Dress Style</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between w-full '>
            <p>Casual</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Formal</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Party</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Gym</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <button className='w-[247px] h-[48px] rounded-[62px] bg-black flex justify-center items-center text-white'>
            Apply Filter
          </button>
        </div>
      </div>
    <div className=' flex-1  h-full'>
      <div className='mb-[16px] flex items-center justify-between'>
        <div className='flex gap-[5px] items-center'>
        <h1 className='font-bold md:text-[32px] text-[24px]'>Casual</h1>
        <p className='md:hidden text-[10px] self-end'>
          Showing 1-10 of 100 Products
          </p>
        </div>
        <div className='flex gap-1 items-center'>
          <p className='md:block hidden'>
          Showing 1-10 of 100 Products
          </p>
          <div className='md:flex gap-1 hidden'>
            <p>Sort by :</p>
            <select className='font-bold' name="" id="">
              <option value="Most Popular">Most Popular</option>
            </select>
          </div>
        </div>
        <div className='block xl:hidden'>
    <Sheet>
      <SheetTrigger asChild>
      <img className='md:hidden block object-contain' src="/home/filter.png" alt="" />
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          <div className='w-full px-[24px] py-[20px] h-[600px] overflow-y-scroll flex flex-col gap-[24px]'>
          <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Filters</h1>
          <img src="/home/filter.png" alt="" />
        </div>
        <hr />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between w-full '>
            <p>T-shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shorts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Hoodie</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Jeans</p>
            <img src="/home/bracket.png" alt="" />
          </div>
        </div>
        <hr />
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Price</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <img src="/home/Group 6.png" alt="" />
        <div className='flex justify-between px-[37px] font-bold'>
          <p>50%</p>
          <p>200%</p>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-[20px]'>Colors</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='h-[180px] flex gap-[16px] flex-wrap'>
          <div className='w-[32px] h-[32px] rounded-full bg-green-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-red-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-yellow-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-orange-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-blue-400'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-blue-700'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-purple-600'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-pink-500'></div>
          <div className='w-[32px] h-[32px] rounded-full border-2 bg-white'></div>
          <div className='w-[32px] h-[32px] rounded-full bg-black'></div>
        </div>
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Size</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='flex flex-wrap gap-[8px]'>
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>XX-Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>X-Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Small</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Medium</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>X-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>XX-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>3X-Large</div>   
          <div className='py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center items-center bg-[#F0F0F0]'>4X-Large</div>   
        </div>
        <hr />
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Dress Style</h1>
          <img className='object-contain -rotate-90' src="/home/bracket.png" alt="" />
        </div>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between w-full '>
            <p>Casual</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Formal</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Party</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Gym</p>
            <img src="/home/bracket.png" alt="" />
          </div>
           <button className='w-full h-[48px] rounded-[62px] bg-black flex justify-center items-center text-white'>
            Apply Filter
           </button>
            </div>
           </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
       
      </div>
      <div className='flex gap-x-[14px] gap-y-[36px] justify-center flex-wrap'>
        {allProducts.slice(0,9).map((product) => (
           <ProductCard key={product.id} name={product.name} percentOff={product.percentOff} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars} rating={product.rating} image={product.image} id={product.id}/>
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Page
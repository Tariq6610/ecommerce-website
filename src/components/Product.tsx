"use client"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "./CartContext"

interface Props {
    id: number,
    name : string,
    percentOff? : string | boolean,
    newPrice : number,
    oldPrice? : string | boolean,
    stars : number,
    rating : number,
    image : string,
}

const ProductCard = ({name, percentOff = false, newPrice, oldPrice = false, stars, rating, image, id} : Props) => {  

    const {addToCart} = useCartContext();





    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent the event from propagating to the Link
        console.log("Add to cart clicked"); // Your custom logic here
        
      };

    return (
   <>
   <Link href={`/product/${id}`}>
    <div className='md:w-[270px] w-[198px] min-h-[350px] group shadow-lg '>
        <div className='md:w-[270px] w-[198px] bg-slate-200 overflow-hidden aspect-square mb-[16px] relative h-[250px] flex justify-center items-center'>
            <Image className="object-cover w-[270px] h-[250px] hover:scale-110  transition-all duration-500"
            width={270}
            height={250}
            priority
            src={image} alt="product image" />
            {percentOff ? 
            <div className='w-[55px] h-[26px]   rounded flex justify-center items-center bg-primary absolute top-[12px] left-[12px] text-white'>{percentOff}</div>
            : ""
        }
            <div className='absolute top-[12px] right-[12px] w-[34px] h-[76px] flex flex-col justify-center items-center'>
                <img src="/Frame 575.png" alt=""  className=''/>
            </div>
          <div className="absolute hidden group-hover:block bottom-0 w-full">
          <button onClick={(e) => {handleButtonClick(e) ; addToCart(id)}} className="w-full h-[41px] bg-black text-white flex justify-center items-center">Add To Cart</button>
            </div>
        </div>
        <div className='flex justify-end flex-col gap-[8px]'>
            <p className="font-bold text-[18px] min-h-[54px] line-clamp-2 xl:min-h-0 xl:h-fit">{name}</p>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <img className='object-contain' src={stars > 0 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 1 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 2 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 3 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 4 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <span className='text-gray-500 text-sm'>{rating}/5</span>
            </div>
            <div className='flex gap-[12px] items-center'><span className='text-[24px] font-bold'>${newPrice}</span>
            {oldPrice && percentOff && <span><span className='text-gray-400 text-[24px] font-bold line-through mr-[10px]'>{oldPrice}</span> 
            <span className="text-sm text-red-600">{percentOff}</span></span>
           }
            </div>
        </div>
    </div>
    </Link>
   </>
  )
}

export default ProductCard
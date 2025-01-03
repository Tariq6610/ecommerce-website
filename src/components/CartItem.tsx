import React from 'react'
import { useCartContext, type Cart } from './CartContext';

interface Props{
  product : Cart
}

const CartItem = ({product}: Props) => {
  const {removeProduct, incrementAmount, decrementAmount} = useCartContext()
  return (
    <>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-[124px] sm:h-[24px] w-auto h-auto ">
          <img
            className="object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-between h-[124px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[20px]">{product.name}</h1>
            <img className='cursor-pointer hover:scale-125 transition-transform duration-200' onClick={()=> removeProduct(product.id)} src="/home/delete.png" alt="" />
          </div>
          <div>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[24px]">${product.newPrice}</h1>
            <div className="flex py-[12px] px-[20px] gap-[20px]">
              <button onClick={() => decrementAmount(product.id)} className='w-6 h-6 rounded-full bg-black text-white flex justify-center items-center cursor-pointer  transition-transform duration-100 active:scale-50 text-xl'>-</button>
              <p>{product.amount}</p>
              <button onClick={() => incrementAmount(product.id)} className='w-6 h-6 rounded-full bg-black text-white flex justify-center items-center cursor-pointer  transition-transform duration-100 active:scale-50 text-xl'>+</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem
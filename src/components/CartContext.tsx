"use client"
import type { Products } from "./items";
import { allProducts } from "./items";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface CartContextType {
  addToCart: (id: number) => void; 
  removeProduct: (id: number) => void; 
  // selectColor: (id: string) => void; 
  // selectSize: (id: string) => void; 
  incrementAmount : (id : number) => void;
  decrementAmount : (id : number) => void;
  // setAmount: Dispatch<SetStateAction<number>>;
  // setColor: Dispatch<SetStateAction<string>>;
  // setSize: Dispatch<SetStateAction<string>>;
  cart: Cart[]
  totalCostPrice : number
  netPrice : number
  discount : number
}

export interface Cart extends Products{
  amount : number,
  color : string,
  size : string
}

//create context
export const cartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContext.Provider");
  }
  return context;
};


const CartContextProvider : FC<{children : ReactNode}> = ({children} ) => {

  const [cart, setCart] = useState<Cart[]>([])
  // const [amount, setAmount] = useState(1)
  // const [color, setColor] = useState("Blue")
  // const [size, setSize] = useState("medium")
  const [totalCostPrice, settotalCostPrice] = useState(0)
  const [netPrice, setNetPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  function addToCart(id : number) : void {
   const addProduct  = allProducts.find((product) => product.id === id)
   const productExists = cart.find((product) => product.id === id)
  if(!productExists && addProduct){
    setCart((prev)=>(
      [
        ...prev,
        addProduct
      ]
    ))
  }
 
  }

  function removeProduct(id: number){
    const newList = cart.filter((product) => product.id !== id)
    setCart(newList)
  }

  function incrementAmount(id : number){
    setCart((prev) =>(
      prev.map((product) => (product.id === id ? {...product, amount : product.amount + 1} : product))
    ))
  }

  function decrementAmount(id : number){
    setCart((prev) =>(
      prev.map((product) => (product.id === id ? {...product, amount : product.amount !== 1 ? product.amount - 1 : product.amount} : product))
    ))
  }

  // function selectColor(color : string){
  //   setColor(color)
  // }

  // function selectSize(size : string){
  //   setSize(size)
  // }
  
 function handleTotalPrice(){
   const deliveryFee = 15;
   const productsPrice = cart.map((product) => product.newPrice * product.amount)
   const totalPrice = productsPrice.reduce((prev, curr) => prev + curr, 0)
   const discount = totalPrice * 20/100
   const totalNetPrice = totalPrice - discount + deliveryFee
   settotalCostPrice(totalPrice)
   setNetPrice(totalNetPrice)
   setDiscount(discount)
 }




useEffect(()=>{
  handleTotalPrice()
},[cart])

  return (
    <cartContext.Provider value={{addToCart, netPrice, discount, incrementAmount,decrementAmount, /*selectColor,  selectSize,*/ cart,removeProduct, totalCostPrice}}>
    {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider


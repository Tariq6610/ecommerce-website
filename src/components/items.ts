export interface Products {
    id: number,
    amount : number,
    color : string,
    size : string,
    name : string,
    percentOff? : string,
    newPrice : number,
    oldPrice? : string,
    stars : number,
    rating : number,
    image : string
}

export const newProducts : Products[] = [
    {
      id: 1,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "T-SHIRT WITH TAPE DETAILS",
      newPrice : 120,
      stars : 4,
      rating : 4,
      image : '/products/Frame 32.png'
    },
    {
      id: 2,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "SKINNY FIT JEANS",
      percentOff : "-10%",
      newPrice : 240,
      oldPrice : "$260",
      stars : 3,
      rating : 3,
      image : '/products/Frame 33.png'
    },
    {
      id: 3,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "CHECKERED SHIRT",
      newPrice : 180,
      stars : 4,
      rating : 4,
      image : '/products/Frame 34.png'
    },
    {
      id: 4,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "SLEEVE STRIPED T-SHIRT",
      percentOff : "-20%",
      newPrice : 130,
      oldPrice : "$160",
      stars : 4,
      rating : 4,
      image : '/products/Frame 35.png'
    },
  ]

  export const topProducts : Products[] = [
    {
      id: 5,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "VERTICAL STRIPED SHIRT",
      percentOff : "-10%",
      newPrice : 210,
      oldPrice : "$232",
      stars : 5,
      rating : 5,
      image : '/topProducts/Frame 32.png'
    },
    {
      id: 6,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "COURAGE GRAPHIC T-SHIRT",
      newPrice : 140,
      stars : 4,
      rating : 4,
      image : '/topProducts/Frame 33.png'
    },
    {
      id: 7,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "LOOSE FIT BERMUDA SHORTS",
      newPrice : 80,
      stars : 3,
      rating : 3,
      image : '/topProducts/Frame 34.png'
    },
    {
      id: 8,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "FADED SKINNY JEANS",
      newPrice : 210,
      stars : 4,
      rating : 4,
      image : '/topProducts/Frame 38.png'
    },
  ]


  export const recomendedProducts : Products[] = [
    {
      id: 9,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "Polo with Contrast Trims",
      percentOff : "-20%",
      newPrice : 210,
      oldPrice : "$242",
      stars : 4,
      rating : 4,
      image : '/recomended/Frame 32.png'
    },
    {
      id: 10,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "Gradient Graphic T-shirt",
      newPrice : 140,
      stars : 3,
      rating : 3,
      image : '/recomended/Frame 33.png'
    },
    {
      id: 11,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "Polo with Tipping Details",
      newPrice : 180,
      stars : 4,
      rating : 4,
      image : '/recomended/Frame 34.png'
    },
    {
      id: 12,
      amount : 1,
      color : "Blue",
      size : "meduim",
      name : "Black Striped T-shirt",
      newPrice : 120,
      stars : 5,
      rating : 5,
      image : '/recomended/Frame 38.png'
    },
  ]

  export const allProducts : Products[] = [...newProducts, ...topProducts, ...recomendedProducts]
 
import React from 'react'
import { Iproduct } from '../interface/Product'

type Props = {
  products : Iproduct[]
}

const Products = (props: Props) => {
  const products: any[] = props.products
  return (
    <>
    <div className='text pt-[40px]'>
      <h1 className='text-center text-[50px] font-bold py-[20px]'>Our Products</h1>
      <p className='text-center text-[20px] pb-[50px]'>List danh sách sản phẩm</p>
</div>
<div className='flex gap-4'>
{products.map((products: any, index:number)=>{
      return (
        <>
    <div className='products'>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src={products.image}
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-[35px] font-semibold text-center tracking-tight text-gray-900 ">
        {products.name}
      </h5>
    </a>
    <div className="flex items-center justify-center mt-2.5 mb-5">
      <div className="flex items-center text-center  text-black space-x-1 rtl:space-x-reverse">
        {products.desc}
      </div>
    </div>
    <div className="flex items-center justify-center">
      <span className="text-3xl font-bold text-center text-gray-900  pb-[20px]">
        ${products.price}
      </span>
    </div>
    <a
        href="#"
        className="text-white flex justify-center bg-gray-500 rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-black "
      >
        Add to cart
      </a>

  </div>
</div>



    </div>
    </>
      )
})}
    </div>
    
    
    </>
  )
}

export default Products
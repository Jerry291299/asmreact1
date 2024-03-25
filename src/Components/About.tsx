import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
    <div className='pt-[60px]'>
    <div className=' bg-gray-100 grid grid-cols-2'>
        <div className='text px-[10px]'>
            <p className='py-[10px] font-semibold '>About Us</p>
            <h1 className='font-bold text-[35px]'>About The Shop</h1>
            <p className='py-[20px] text-[19px]'>KNOW THE CARBON FOOTPRINT:
All life cycle stages have been considered in our product carbon footprint calculation methodology and is based on the adidas' prototype size. From raw material extraction, processing, production & assembly, packaging, transportation, use and though to the end of the product's life, we measured the carbon footprint (CO2e). This conforms to the internationally recognized standard: ISO 14067.
We've designed the Supernova Rise to deliver maximum comfort in every stride. Our Dreamstrike+ technology cushions the midsole with ​re-engineered super foam. What makes it so super, you ask? It offers the ideal balance of comfort and support to keep you comfy mile after mile. Additionally you will get a system of denser foam Support Rods which means in the real world worry-free transition from heel to toe. Finally, our Comfort Heel Fit combines cushy foam and soft textile for a more secure fit so that it feels like the shoe is giving your heel a hug.


 </p>


            <div className='grid grid-cols-2 pt-[40px]'>
                <div className='text1'>
                    <h1 className='font-bold text-[50px] pb-[5px]'>10x</h1>
                    <p className='font-semibold	'>increase in productivity</p>
                    <h1 className='font-bold text-[50px] pt-[50px] pb-[5px]'>5k+</h1>
                    <p className='font-semibold	'>Happy customers</p>
                </div>
                <div className='text2'>
                    <h1 className='font-bold text-[50px] pb-[5px]'>300+</h1>
                    <p className='font-semibold	'>Products</p>
                    <h1 className='font-bold text-[50px] pt-[50px] pb-[5px]'>100+</h1>
                    <p className='font-semibold	'>5-star reviews</p>
                </div>
            </div>
        </div>




        <div className='img'>
            <img className='w-full' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2374a43006f43ae8299961a0eb7602a_9366/Tokyo_Running_Jacket_Black_IP3553_HM4.jpg" alt=""  />
        </div>







    </div>
    </div>
    
    
    
    
    
    </>




    )
}

export default About
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <>
    <div className='relative pt-[50px]'>
        
            <img className='w-full' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4251140_Onsite_SS_24_ORTUS_PART_2_YEEZY_SEA_15_MAR_Masthead_DT_2880x1280_D_37ed0a4db9.jpg" alt="" />
        

        <div className='text absolute bottom-[80px] left-0 pl-[20px] w-1/2'>
            <h1 className='font-bold text-[45px] pl-[10px]'>
                Revamp Your Wardrobe with Our <br/> 
                Stylish Collection
            </h1>

            <h2 className='px-[20px] pt-[40px] text-[28px]'>
            When style blends seamlessly with performance, you get these adidas shoes. Designed to keep you cool and comfortable on the go, they fuse a sock-like mesh upper that's hugged by a bio-based foam cage. The result is an ultra-breathable, lightweight shoe that moves with your every step. It's a fresh take on a running shoe with a fast look and plenty of comfort.

            </h2>

            <div className='buttonshopnow pl-[50px] mt-[60px] text-[20px]'>
                <button className='box-border rounded-full bg-black text-white border-white h-14 w-40 border-2 mr-[10px]'>Shop now</button>
                <button className='box-border rounded-full bg-black text-white border-white h-14 w-40 border-2'>Button</button>
            </div>
        </div>









    </div>
    
    </>
  )
}

export default Banner
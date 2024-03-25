import React from 'react'
import Facebook from './img/Facebook.png'
import Global from './img/global.png'
import heart from './img/heart.png'
import image from './img/Image.jpg'
import noti from './img/notification.png'
import shoppingcard from './img/shopping-cart.png'
import insta from './img/Instagram.png'
import link from './img/LinkedIn.png'
import twitter from './img/Twitter.png'
import nguoi from './img/user.png'
import logo from './img/Ddsgnr Library.png'
type Props = {}

const Header = (props: Props) => {
  return (

    <>
    <div className='HeaderContainer w-[1400px]'>
      <div className='up py-[15px] flex justify-between font-medium'>
        <div className='trái flex'>
          <p className='border-r-2 border-black px-[20px]'>Phone Number: 956 742 455 678</p>
          <p className='px-[20px]'>Email:info@ddsgnr.com</p>
        </div>

        <div className='phải flex gap-3'>
          <div className='icon flex pr-[150px] gap-4'>
            <img src= {Facebook} alt=""/>
            <img src={insta} alt=""/>
            <img src={twitter} alt=""/>
            <img src={link} alt=""/>
          </div>

          <div className='flex'>
          <img className='scale-[0.9] pr-[10px]' src={Global} alt=""/>
          <p>English</p>
          </div>

          <div className='flex'>
          <img className='scale-[0.9] pl-[30px] pr-[10px]' src={nguoi} alt=""/>
          <p>Sign in</p>
          </div>
        </div>
        </div>




      <div className='down flex justify-between border-y-2 py-[12px] border-black'>
        <img src={logo} alt=""/>
        <div className='right flex'>
          <div className="text flex gap-14 pt-[7px] text-lg">
            <p className='hover:border-b-2 border-black'>Home</p>
            <p className='hover:border-b-2 border-black'>Products</p>
            <p className='hover:border-b-2 border-black'>About Us</p>
            <p className='hover:border-b-2 border-black'>Contact</p>
          </div>




          <div className="search px-[30px]">
          <div className="relative">
  <input
    type="text"
    className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
    placeholder="search..."
  />
  <svg
    className="w-4 h-4 absolute right-[10px] top-3.5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</div>

          </div>

          <div className="icon2 flex gap-10">
            <div className=''>
              <img className='pl-[15px]' src={heart} alt="" />
              <p>Wishlist</p>
            </div>
            <div className=''>
              <img className='pl-[3px]' src={shoppingcard} alt="" />
              <p>Cart</p>
            </div>
            <div className=''>
               <img className='pl-[25px]' src={noti} alt="" />
               <p>Notification</p>
            </div>
          </div>





        </div>
      </div>



    </div>
    </>


    )
}

export default Header
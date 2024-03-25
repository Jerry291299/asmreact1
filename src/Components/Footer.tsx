import React from 'react'
import logo from './img/Ddsgnr Library.png'
import face from './img/Facebook.png'
import insta from './img/Instagram.png'
import chim from './img/Twitter.png'
import linkk from './img/LinkedIn.png'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <div>
    <div className='pt-[80px] pb-[70px] w-[full] grid grid-cols-5'>
      <div className="logo w-[100px]">
        <img className='w-full' src={logo} alt="" />
      </div>
      <div className="category1 w-[100px]">
        <p className='pb-[10px] font-bold'>Categories</p>
        <p className='pb-[10px]'>Wall art</p>
        <p className='pb-[10px]'>Vase</p>
        <p className='pb-[10px]'>Tea</p>
        <p className='pb-[10px]'>Chair</p>
        <p className='pb-[10px]'>Basket</p>
      </div>
      <div className="category2 w-[100px]">
        <p className='pb-[10px]'>Bed table</p>
        <p className='pb-[10px]'>Armchair</p>
        <p className='pb-[10px]'>Ficus</p>
        <p className='pb-[10px]'>Desk decor</p>
        <p className='pb-[10px]'>Cactus</p>
      </div>
      <div className="About w-[100px]">
        <p className='pb-[10px] font-bold'>About</p>
        <p className='pb-[10px]'>Contact Us</p>
        <p className='pb-[10px]'>About US</p>
        <p className='pb-[10px]'>Help</p>
        <p className='pb-[10px]'>FAQ</p>
        <p className='pb-[10px]'>Term</p>

      </div>
      <div className="Subcribe w-[500px]">
        <p className='font-bold pb-[10px]'>Subscribe</p>
        <p className='py-[10px]'>Join our newsletter to stay up to date on features and releases.</p>
        <div className="w-full text-center">
  <form action="#">
    <div className="max-w-s flex">
      <input
        type="email"
        placeholder="yourmail@example.com"
        className="flex px-[70px] appearance-none rounded shadow text-grey-dark focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
      >
        Subscribe
      </button>
    </div>
  </form>
</div>
<p className='pt-[15px]'>By subscribing you agree to with our Privacy Policy and <br/> provide consent to receive updates from our company.</p>
</div>
</div>

<div className="foot pt-[100px] pb-[50px] border-t-2 border-black justify-between flex ">
  <div className="text flex gap-5">
    <p>2023 Relume. All right reserved.</p>
    <a href="#"> Privacy Policy</a>
    <a href="#"> Term of Service</a>
    <a href="#"> Cookies Setting</a>
  </div>
  <div className="icon flex gap-3">
    <img src={face} alt="" />
    <img src={insta} alt="" />
    <img src={chim} alt="" />
    <img src={linkk} alt="" />
  </div>
</div>


    </div>
    
    </>


    )
}

export default Footer
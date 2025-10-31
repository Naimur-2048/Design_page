'use client'
import React, { useState } from 'react'
import { GiSnakeJar } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { PiUnionBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { RiMenuFold3Line } from "react-icons/ri";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { PiFireSimpleThin } from "react-icons/pi";
import Link from 'next/link';

const page = () => {
  const [openButton, setOpenButton] = useState(false);
  const [openPriceButton, setOpenPriceButton] = useState(false);
  const [openColorButton, setOpenColorButton] = useState(false);
  const [openBrandButton, setOpenBrandButton] = useState(false);
  const [openRatingButton, setOpenRatingButton] = useState(false);
  const [openStatusButton, setOpenStatusButton] = useState(false);
  const [openMaterialButton, setOpenMaterialButton] = useState(false);
  const [hideOpenButton, setHideOpenButton] = useState(true);
  console.log(hideOpenButton)
  

  return (
    <>
      <div className='h-full w-full '>
        <div className="grid grid-cols-1  bg-[#262626] p-3 fixed z-50 top-0 w-full ">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <GiSnakeJar className="text-green-500" size={20} />
              <p>
                <span className="font-bold">Envato</span>market
              </p>
            </div>
            <div>
              <button className=" p-2 px-4 text-sm rounded-sm bg-[#82B440]">
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-black mt-15 w-full p-1 ">
          <div className='flex justify-between px-26'>
            <div>
              <p>Free shipping over $100</p>

            </div>


            <ul className='*:inline *:px-[15px] *:py-1 *:text-gray-400 *:hover:text-white'>
              <li><button className='text-sm'>FAQ</button></li>
              <li><button className='text-sm'>Support</button></li>
              <li className='[&>ul]:hidden hover:[&>ul]:block relative transition-all *:transition-all duration-500 *:duration-500 '>
                <button className='text-sm'>USD</button>
                <ul className='absolute z-10 w-[270px] top-[26px] left-[-102px] transition-all *:transition-all *:delay-150 *:duration-500  bg-black text-gray-400 w-[150px] *:px-[15px] *:py-[10px] *:hover:text-white'>
                  <li className='animate__fadeInUp'><Link href={'/'}>EUR</Link></li>
                  <li className='animate__fadeInUp'><Link href={'/'}>GBP</Link></li>
                  <li className='animate__fadeInUp'><Link href={'/'}>CAB</Link></li>

                </ul>
              </li>
            </ul>

          </div>
        </div>

        <div className='grid grid-cols-3 bg-white w-full px-26'>
          <div className='flex items-center py-8 '>
            <a href="" className='text-white bg-gray-800 rounded-full p-1'><PiUnionBold size={"25"} /></a>

          </div>

          <div className='flex gap-8 text-black'>
            <button className="cursor-pointer hover:text-gray-400">
              Demos
            </button>
            <button className="cursor-pointer hover:text-gray-400">
              Features
            </button>
            <button className="cursor-pointer hover:text-gray-400">
              Works
            </button>
            <button className="cursor-pointer hover:text-gray-400">Blog</button>
            <button className="cursor-pointer hover:text-gray-400">Shop</button>
            <button className="cursor-pointer hover:text-gray-400">
              Pages
            </button>
            <button className="cursor-pointer hover:text-gray-400">
              Extra
            </button>

          </div>
          

          <div className='flex justify-end items-center gap-5'>
            <a href='' className='hover:text-gray-400 text-black'> <CiSearch size={"25"} /> </a>
            <a href='' className='hover:text-gray-400 text-black'> <CgProfile size={"20"} /> </a>
            <a href='' className='hover:text-gray-400 text-black'> <FaRegHeart size={"20"} /> </a>
            <a href='' className='hover:text-gray-400 text-black'> <CiLock size={"25"} /> </a>

          </div>


        </div>

        <div className="h-85 w-full overflow-hidden relative">
          <div className=' w-full absolute px-25 flex flex-col  justify-start py-16'>
            <p>Backpack Collection</p>
            <div className='flex flex-col gap-0'>
              <p className='mt-2 text-[35px]'>Discover must-have</p>
              <p className=' text-[35px]'> special offers and promos</p>

            </div>

            <div className='mt-5'>
              <button className='px-5 border-2 border-white py-2 rounded-3xl hover:text-black hover:bg-white '>
                Descover Now
              </button>

            </div>

          </div>
          <img src="/images/two.jpg" className='h-full  w-full object-cover ' />
        </div>

        <div className='grid grid-cols-1 w-full'>
          <ul className='text-black flex gap-5 justify-end items-center px-26 py-10 '>
            <li className='relative [&>ul]:hidden hover:[&>ul]:block' > <button className='flex gap-2 items-center cursor-pointer hover:text-gray-400'> <p>Sort by latest </p><FaChevronDown />
            </button>
              <ul className='text-black bg-white w-75 top-[20px] z-50 absolute p-10 *:py-2 *:text-gray-400 *:cursor-pointer '>
                <li className='hover:text-gray-600'> sort by popularity</li>
                <li className='hover:text-gray-600'>Sort by average rating</li>
                <li className='hover:text-gray-600'>Sort by price: Low to High</li>
                <li className='hover:text-gray-600'>Sort by price: High to Low</li>
              </ul>
            </li>

            <li className='' >
               <button onClick={() => setHideOpenButton(!hideOpenButton)} className='flex gap-2 items-center cursor-pointer hover:text-gray-400 '> 
                <p >hide filters </p>
                <RiMenuFold3Line />
            </button>

            </li>


          </ul>

        </div>

        <div className='flex  '>

          {/* side menu ber */}
          {hideOpenButton &&(
            <div className='w-130 pl-26 '>
            <ul className='text-gray-700 font-semibold'>
              {/* Categories part */}
              <li className=' '>
                <button onClick={() => setOpenButton(!openButton)} className='w-full flex justify-between items-center cursor-pointer pb-5 border-b-1 border-gray-300'>
                  <p>Categories</p>
                  {openButton == !true && (
                    <p><FaChevronDown /></p>
                  )}
                  {openButton == true && (
                    <p><FaChevronUp /></p>
                  )}
                </button>

                {openButton && (
                  <ul className='py-5 *:py-1 '>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Apparel</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Bikes</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Electronis</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Furniture</p></div></Link></li>
                  </ul>
                )}
              </li>

              {/* Color */}
              <li className=' '>
                <button onClick={() => setOpenColorButton(!openColorButton)} className='w-full flex justify-between items-center cursor-pointer py-3 border-b-1 border-gray-300'>
                  <p>Color</p>
                  {openColorButton == !true && (
                    <FaChevronDown />
                  )}
                  {openColorButton == true && (
                    <FaChevronUp />

                  )}

                </button>
                {openColorButton && (
                  <div className='grid grid-cols-2'>
                    <div>
                      <ul className='py-5 *:py-1 '>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-black'><p className='text-center text-sm text-black group-hover:text-white  '>✔</p></div> <p className='group-hover:text-gray-400 '>Black</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-green-500'><p className='text-center text-sm text-green-500 group-hover:text-white  '>✔</p></div> <p className='group-hover:text-gray-400 '>Green</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center'><div className='h-5 w-5 rounded-full bg-orange-500'><p className='text-center text-sm text-orange-500 group-hover:text-white'>✔</p></div> <p className='group-hover:text-gray-400 '>Orange</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-red-500'><p className='text-center text-sm text-red-500 group-hover:text-white '>✔</p></div> <p className='group-hover:text-gray-400 '>Red</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-yellow-500 text-yellow-500'><p className='text-center text-sm text-yellow-500 group-hover:text-white'>✔</p></div> <p className='group-hover:text-gray-400 '>Yellow</p></div></Link></li>
                      </ul>
                    </div>

                    <div>
                      <ul className='py-5 *:py-1 '>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-blue-500'><p className='text-center text-sm text-blue-500 group-hover:text-white  '>✔</p></div> <p className='group-hover:text-gray-400 '>Blue</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center'><div className='h-5 w-5 rounded-full bg-gray-500'><p className='text-center text-sm text-gray-500 group-hover:text-white'>✔</p></div> <p className='group-hover:text-gray-400 '>Gray</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-pink-500'><p className='text-center text-sm text-pink-500 group-hover:text-white '>✔</p></div> <p className='group-hover:text-gray-400 '>pink</p></div></Link></li>
                        <li ><Link href=" /" className='group '> <div className='flex gap-2 items-center '><div className='h-5 w-5 rounded-full bg-white'><p className='text-center text-sm text-white group-hover:text-gray-500'>✔</p></div> <p className='group-hover:text-gray-400 '>white</p></div></Link></li>

                      </ul>
                    </div>

                  </div>
                )}
              </li>

              {/* Brand */}
              <li className=' '>
                <button onClick={() => setOpenBrandButton(!openBrandButton)} className='w-full flex justify-between items-center py-3 border-b-1 border-gray-300'>
                  <p>Brand</p>
                  {openBrandButton == !true && (
                    <FaChevronDown />
                  )}
                  {openBrandButton == true && (
                    <FaChevronUp />
                  )}
                </button>
                {openBrandButton && (
                  <ul className='py-5 *:py-1 '>
                    <div className='grid grid-cols-4 gap-2 w-full'>

                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd1.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd2.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd3.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd4.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd5.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd6.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd7.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                      <li className='border-1 border-gray-300 hover:border-gray-800'>
                        <Link href={'/'}>
                          <img src='images/bd8.png' className='h-10 w-full ' />
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}


              </li>

              {/* price */}


              <li className=' '>
                <button onClick={() => setOpenPriceButton(!openPriceButton)} className='w-full flex justify-between items-center cursor-pointer  py-3 border-b-1 border-gray-300'>
                  <p>Price</p>
                  {openPriceButton == !true && (
                    <p><FaChevronDown /></p>
                  )}
                  {openPriceButton == true && (
                    <p><FaChevronUp /></p>
                  )}
                </button>

                {openPriceButton && (
                  <ul className='py-5 *:py-1 '>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Under $25</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>$25-$100</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>$100-$500</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>$500-$1000</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Over $1000</p></div></Link></li>
                  </ul>
                )}
              </li>

              {/* Rating */}

              <li className=' '>
                <button onClick={() => setOpenRatingButton(!openRatingButton)} className='w-full flex justify-between items-center cursor-pointer py-3 border-b-1 border-gray-300'>
                  <p>Rating</p>
                  {openRatingButton == !true && (
                    <p><FaChevronDown /></p>
                  )}
                  {openRatingButton == true && (
                    <p><FaChevronUp /></p>
                  )}
                </button>

                {openRatingButton && (
                  <ul className='py-5 *:py-2 '>
                    <li ><Link href=" /"> <div className='flex gap-1 items-center text-[10px] hover:text-gray-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-1 items-center text-[10px] hover:text-gray-400'> <FaStar /> <FaStar /> <FaStar /> <FaStar />  <p className='text-gray-400'><FaStar /></p> </div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-1 items-center text-[10px] hover:text-gray-400'> <FaStar /> <FaStar /> <FaStar />  <p className='text-gray-400'><FaStar /> </p>  <p className='text-gray-400'><FaStar /> </p></div></Link></li>

                  </ul>
                )}
              </li>

              {/* Status */}

              <li className=' '>
                <button onClick={() => setOpenStatusButton(!openStatusButton)} className='w-full flex justify-between items-center cursor-pointer py-3 border-b-1 border-gray-300'>
                  <p>Status</p>
                  {openStatusButton == !true && (
                    <p><FaChevronDown /></p>
                  )}
                  {openStatusButton == true && (
                    <p><FaChevronUp /></p>
                  )}
                </button>

                {openStatusButton && (
                  <ul className='py-5 *:py-1 '>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>On sale</p></div></Link></li>
                    <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>In Stock</p></div></Link></li>
                  </ul>
                )}
              </li>

              {/* Materials */}

              <li className=' '>
                <button onClick={() => setOpenMaterialButton(!openMaterialButton)} className='w-full flex justify-between items-center cursor-pointer py-3 border-b-1 border-gray-300'>
                  <p>Materials</p>
                  {openMaterialButton == !true && (
                    <p><FaChevronDown /></p>
                  )}
                  {openMaterialButton == true && (
                    <p><FaChevronUp /></p>
                  )}
                </button>

                {openMaterialButton && (
                  <ul className='w-full py-5  flex flex-wrap gap-3 '>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Aluminum</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Carbon</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Cotton</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Denim</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Lenin</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Nycra</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Nylon</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Plastic</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Polyester</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Silicon</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Steel</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Titenium</p> </Link></li>
                    <li> <Link href={'/'}><p className='px-3 py-2 border-1 border-gray-300 text-sm font-light hover:border-gray-800 hover:text-gray-400'> Wood</p> </Link></li>

                  </ul>
                )}
              </li>

            </ul>
          </div>
            
          )}

          

          {/* Shop side */}

          <div className='grid grid-cols-4 gap-5  w-full px-26'>
            <div className=" ">
              <div className='relative  ' >
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/Product'}><img src="/images/shop.jpg" sizes='219px' className='' /> </Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-yellow-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-green-500 rounded-full p-1' />
                    <FaCheck className='bg-pink-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] mb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Backpacks </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Everyday Backpacks </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd1.png' className='h-10 w-20 ' />
              </div>

            </div>


            <div>
              <div className='relative'>
                <div className='relative h-ful w-full overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500  '>
                  <Link href={'/'}><img src="/images/shop1.jpg" sizes='219px' className='' /></Link>
                  <ul className='flex gap-2 text-sm justify-center bottom-[-15]  absolute w-full'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Electronic, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Photography </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Spectrum X-200T </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>

              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd3.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop2.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                    <FaCheck className='bg-orange-500 rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Bikes  </Link>
                </p>
                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Integra Trident </Link>
                  <p className='text-center mt-1'>$950</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd5.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop3.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>
              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center  text-[12px] mb-2'>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Shoes </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Traverse Winner </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd7.png' className='h-10 w-20 ' />
              </div>

            </div>

            <div className=" ">
              <div className='relative  ' >
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop.jpg" sizes='219px' className='' /> </Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-yellow-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-green-500 rounded-full p-1' />
                    <FaCheck className='bg-pink-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] mb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Backpacks </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Everyday Backpacks </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd1.png' className='h-10 w-20 ' />
              </div>

            </div>


            <div>
              <div className='relative'>
                <div className='relative h-ful w-full overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500  '>
                  <Link href={'/'}><img src="/images/shop1.jpg" sizes='219px' className='' /></Link>
                  <ul className='flex gap-2 text-sm justify-center bottom-[-15]  absolute w-full'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Electronic, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Photography </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Spectrum X-200T </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>

              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd3.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop2.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                    <FaCheck className='bg-orange-500 rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Bikes  </Link>
                </p>
                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Integra Trident </Link>
                  <p className='text-center mt-1'>$950</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd5.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop3.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>
              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center  text-[12px] mb-2'>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Shoes </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Traverse Winner </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd7.png' className='h-10 w-20 ' />
              </div>

            </div>
            <div className=" ">
              <div className='relative  ' >
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop.jpg" sizes='219px' className='' /> </Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-yellow-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-green-500 rounded-full p-1' />
                    <FaCheck className='bg-pink-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] mb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Backpacks </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Everyday Backpacks </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd1.png' className='h-10 w-20 ' />
              </div>

            </div>


            <div>
              <div className='relative'>
                <div className='relative h-ful w-full overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500  '>
                  <Link href={'/'}><img src="/images/shop1.jpg" sizes='219px' className='' /></Link>
                  <ul className='flex gap-2 text-sm justify-center bottom-[-15]  absolute w-full'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Electronic, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Photography </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Spectrum X-200T </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>

              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd3.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop2.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                    <FaCheck className='bg-orange-500 rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Bikes  </Link>
                </p>
                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Integra Trident </Link>
                  <p className='text-center mt-1'>$950</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd5.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop3.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>
              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center  text-[12px] mb-2'>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Shoes </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Traverse Winner </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd7.png' className='h-10 w-20 ' />
              </div>

            </div>

            <div>
              <div className='relative'>
                <div className='relative h-ful w-full overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500  '>
                  <Link href={'/'}><img src="/images/shop1.jpg" sizes='219px' className='' /></Link>
                  <ul className='flex gap-2 text-sm justify-center bottom-[-15]  absolute w-full'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Electronic, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Photography </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Spectrum X-200T </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>

              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd3.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop2.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                    <FaCheck className='bg-orange-500 rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>

              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Bikes  </Link>
                </p>
                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Integra Trident </Link>
                  <p className='text-center mt-1'>$950</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd5.png' className='h-10 w-20 ' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop3.jpg" sizes='219px' className='' /></Link>
                  <ul className='absolute  text-sm bottom-[-15] flex gap-2 w-full  justify-center'>
                    <FaCheck className='bg-gray-500 rounded-full p-1' />
                    <FaCheck className='bg-black rounded-full p-1' />
                    <FaCheck className='bg-white rounded-full p-1' />
                    <FaCheck className='bg-blue-500 rounded-full p-1' />
                  </ul>
                </div>
                <div className='absolute h-full text-center text-black  top-0 right-0 p-4'>
                  <div className='flex flex-col gap-2 w-full '>
                    <FaSearchPlus size={'20'} className=' bg-gray-300 rounded-full p-1' />
                    <IoMdHeartEmpty size={'20'} className='  bg-gray-300 rounded-full p-1' />
                  </div>
                </div>
              </div>
              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center  text-[12px] mb-2'>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Apparel, </Link>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Shoes </Link>
                </p>

                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px] font-bold mx-auto hover:text-amber-500'> Traverse Winner </Link>
                  <p className='text-center mt-1'>$125</p>
                </p>
              </div>
              <div className='h-20 w-full flex justify-center items-center'>
                <img src='images/bd7.png' className='h-10 w-20 ' />
              </div>

            </div>


            <div className='col-span-4 col-start-1'>
              <div className='w-full flex justify-between items-center text-black py-2'>
                <MdKeyboardArrowLeft />
                <ul className='flex gap-4'>
                  <li><button>1</button></li>
                  <li><button>2</button></li>
                  <li><button>3</button></li>
                  <li><button>4</button></li>
                </ul>
                <MdKeyboardArrowRight />

              </div>
            </div>



          </div>

        </div>

        <div className='w-full bg-[#1B1D1F] py-25 px-25 mt-15'>
          <div className='grid grid-cols-5 '>
            <div className=''>
              <p>NEWSLETTER — SIGN UP</p>
               <p className='text-sm py-8'>Be the first to know about special offers,
                new product launches, and events.</p>
                <div className='w-full'>
                  <div className='flex justify-end '>
                    <button className='absolute bg-[#303133] py-1 px-2 mt-1 mr-1 z-50 hover:bg-gray-800 '>Subscribe</button>
                  </div>
                  
                <input placeholder='Your Email' className='w-full relative p-2 text-sm focus:border-red-500 outline-none border-1 border-gray-400'/>
               </div>     
                
            </div>

            <div>
              
            </div>

            <div>
              <p className='mb-10'>SHOP</p>
              <ul className='*:py-1 *:text-sm'>
                <li><Link href={'/'} className='hover:text-orange-700'> Shop All</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Woman Collection</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Man Collection</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Accessories</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> New Arrivals</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Latest Collection</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Gift Card</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Top seller</Link></li>
                
              </ul>
            </div>

            <div>
              <p className='mb-10'>CUSTOMERS</p>
              <ul className='*:py-1 *:text-sm'>
                <li><Link href={'/'} className='hover:text-orange-700'> Faqs</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Shipping</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Returns</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Terms</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Contract Us</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> Privacy</Link></li>  
              </ul>
            </div>

            <div>
              <p className='mb-10'>CONTRACT US</p>
              <ul className='*:py-1 *:text-sm'>
                <li><Link href={'/'} className='hover:text-orange-700'> felp@yourwebsite.com</Link></li>
                <li><Link href={'/'} className='hover:text-orange-700'> 1-888-625-8064</Link></li>
               <li><Link href={'/'} className='hover:text-orange-700'> 1-888-912-8375</Link></li>  
              </ul>
            </div>

          </div>
          
        </div>
        <div className='w-full flex justify-between items-center bg-[#1B1D1F] border-t-1 border-gray-700 px-25 py-5'>
            <div>
              <p className='text-sm'>© 2025 Uncode. All rights reserved</p>

            </div>
            <div  className='flex gap-4 text-white'>
              <CiFacebook />
              <CiYoutube />
              <RiTwitterXLine />
              <PiFireSimpleThin />


            </div>

          </div>




        <div className=' absolute right-0 top-50 fixed' >
          <div className='p-5 flex flex-col gap-3   text-black bg-white w-15'>
            <CiSettings />
            <TiMessage />
            <IoMdHeartEmpty />
            <FaBook />
            <CiVideoOn />

          </div>

        </div>







      </div>
    </>
  )
}

export default page
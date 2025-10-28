'use client'
import React from 'react'
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
import { CiVideoOn } from "react-icons/ci";
import Link from 'next/link';

const page = () => {
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
              <ul className='text-black bg-white w-75 top-[20px] absolute p-10 *:py-2 *:text-gray-400 *:cursor-pointer '>
                <li className='hover:text-gray-600'> sort by popularity</li>
                <li className='hover:text-gray-600'>Sort by average rating</li>
                <li className='hover:text-gray-600'>Sort by price: Low to High</li>
                <li className='hover:text-gray-600'>Sort by price: High to Low</li>
              </ul>
            </li>

            <li className='' > <button className='flex gap-2 items-center cursor-pointer hover:text-gray-400 '> <p >hide filters </p><RiMenuFold3Line />
            </button>

            </li>


          </ul>

        </div>

        <div className='flex  '>

          <div className='w-130 pl-26'>
            <ul className='text-gray-700 font-semibold'>
              <li className=' '>
                <Link href="/" className='flex justify-between items-center pb-5 border-b-1 border-gray-300'>
                <p>Categories</p><FaChevronDown />
                </Link>
                <ul className='py-5 *:py-1 '>
                  <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                  <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                  <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                  <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                  <li ><Link href=" /"> <div className='flex gap-2 items-center hover:text-gray-400'><div className='h-5 w-5 rounded-sm border-1 border-gray-400'></div> <p>Accessories</p></div></Link></li>
                </ul>
              </li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Color</p><FaChevronDown /></Link></li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Brand</p><FaChevronDown /></Link></li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Price</p><FaChevronDown /></Link></li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Rating</p><FaChevronDown /></Link></li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Status</p><FaChevronDown /></Link></li>
              <li className=' '><Link href="/" className='flex justify-between items-center py-3 border-b-1 border-gray-300'><p>Materials</p><FaChevronDown /></Link></li>

            </ul>

          </div>
          <div className='grid grid-cols-4 gap-5  w-full px-26'>
            <div className=" ">

              <div className='relative  ' >
                <div className='w-full h-full relative overflow-hidden hover:[&>ul]:bottom-4 [&>ul]:transition-all [&>ul]:duration-500   '>
                  <Link href={'/'}><img src="/images/shop.jpg" sizes='219px' className='' />
                  </Link>
                  <ul className='absolute text-white  bottom-[-15] text-sm  flex gap-2 w-full  justify-center'>
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
            </div>
            <div className=''>
              <Link href={'/'}><img src="/images/shop1.jpg" sizes='219px' className='' /></Link>
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

            </div>
            <div className=''>
              <Link href={'/'}><img src="/images/shop2.jpg" sizes='219px' className='' /></Link>
              <div className='text-black py-4 p-2 border-b-1 border-gray-400'>
                <p className='flex gap-1 justify-center text-[12px] pb-2 '>
                  <Link href={'/'} className='text-gray-600 hover:text-amber-500'>Bikes  </Link>


                </p>
                <p className='flex flex-col justify-center font-bold text-gray-700'>
                  <Link href={'/'} className='text-[15px]  mx-auto hover:text-amber-500'> Integra Trident </Link>
                  <p className='text-center mt-1'>$950</p>

                </p>

              </div>

            </div>
            <div className=''>
              <Link href={'/'}><img src="/images/shop3.jpg" sizes='219px' className='' /></Link>
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
            </div>

          </div>
        </div>




        <div className=' absolute right-0 top-50 fixed' >
          <div className='p-5 flex flex-col gap-3   text-black bg-gray-300 w-15'>
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
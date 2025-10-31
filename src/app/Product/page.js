'use client'
import React from 'react'
import { GiSnakeJar } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { PiUnionBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { LuCirclePower } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { PiButterflyDuotone } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';


const page = () => {

  return (
    <>
      <div className='w-full h-full bg-white '>
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

        <div className="grid grid-cols-1 bg-white mt-15 w-full p-1 border-b-1 border-gray-200 ">
          <div className='flex justify-between px-26'>
            <div>
              <p className='text-sm text-black'>Free shipping over $100</p>

            </div>


            <ul className='*:inline *:px-[15px] *:py-1 *:text-black *:hover:text-gray-400'>
              <li><button className='text-sm'>FAQ</button></li>
              <li><button className='text-sm'>Support</button></li>
              <li className='[&>ul]:hidden hover:[&>ul]:block relative transition-all *:transition-all duration-500 *:duration-500 '>
                <button className='text-sm'>USD</button>
                <ul className='absolute z-10 w-[270px] top-[26px] left-[-102px] transition-all *:transition-all *:delay-150 *:duration-500  bg-white text-black w-[150px] *:px-[15px] *:py-[10px] *:hover:text-gray-400'>
                  <li className=''><Link href={'/'}>EUR</Link></li>
                  <li className=''><Link href={'/'}>GBP</Link></li>
                  <li className=''><Link href={'/'}>CAB</Link></li>

                </ul>
              </li>
            </ul>

          </div>
        </div>

        <div className='grid grid-cols-3 bg-white w-full px-26 border-b-1 border-gray-200'>
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

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-15 p-30 '>

           {/* Big photo */}

          <div className=' '>
            <div>
              <Link href='/'><img src='images/by.jpg' className='w-full h-[750px]' /></Link>  
            </div>

            <div className='grid grid-cols-4 gap-2 py-5'>
              <Link href='/'><img src='images/by.jpg' className='w-full h-[143px]'/></Link>
              <Link href='/'><img src='images/by1.jpg' className='w-full h-[143px]'/></Link>
              <Link href='/'><img src='images/by2.jpg' className='w-full h-[143px]'/></Link>
              <Link href='/'><img src='images/by3.jpg' className='w-full h-[143px]'/></Link>


            </div>
           
          </div>

          <div className='text-black '>
            <ul className='flex text-sm text-gray-400 gap-1'>
              <li><Link href={'/'}>Home</Link></li>
              <span>/</span>
              <li><Link href={'/'}>Shop</Link></li>
              <span>/</span>
              <li><Link href={'/'}>Apparel</Link></li>
              <span>/</span>
              <span> Everyday Backpack</span>
            </ul>

            <div className='flex justify-between items-center'>
              <p className='text-[30px]'>Everyday Backpack</p>
              <p><img src='images/bd1.png' className='h-10 w-20 border-1 border-gray-200' /></p>
            </div>
            <span className='text-[30px]'>$125</span>
            <li >
              <Link href=" /">
                <div className='flex  items-center text-[10px]'>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <p className='text-[10px] ml-5 hover:text-gray-400'>(2 customers review)</p>
                </div>
              </Link>
            </li>
            <p className='flex flex-wrap py-3 text-gray-500'>
              Quickly impact bleeding-edge bandwidth whereas covalent catalysts for change.
              Tonal stitching. 98% cotton, 2% elastane. Made in Italy.
            </p>
            <p>Color</p>
            <div className='flex gap-1 py-3'>
              <img src='images/by.jpg' className='h-[58px] w-[58px]' />
              <img src='images/bb.jpg' className='h-[58px] w-[58px]' />
              <img src='images/bw.jpg' className='h-[58px] w-[58px]' />
              <img src='images/br.jpg' className='h-[58px] w-[58px]' />
              <img src='images/bp.jpg' className='h-[58px] w-[58px]' />
            </div>

            <div className='w-[51%] grid grid-cols-2 gap-2 py-4'>
              <div className='bg-gray-200 flex justify-between items-center text-black w-full'>
                <button className='py-3 px-4 cursor-pointer'><FaMinus /></button>
                <p><input className='w-12 h-full outline-none' /></p>
                <button className='py-3 px-4 cursor-pointer'><FaPlus /></button>
              </div>
              <div className='w-full bg-[#303133] border-1 border-black text-white hover:bg-white hover:text-black cursor-pointer  py-3 px-5 text-center'>
                <span className='text-center  '>Add to Cart</span>
              </div>

            </div>
            <div className='flex gap-2 items-center py-4'>
              <CiHeart /> <span className='text-sm'>Add to Wishlist</span>
            </div>

            <div className='flex gap-10 py-5 border-t-1 border-b-1 border-gray-300'>
              <div className=' flex flex-col'>
                <span>SKU</span>
                <span>Categories</span>
              </div>
              <div className='text-gray-400 flex flex-col'>
                <span>89089777</span>
                <span>Apparels, Backpacks</span>
              </div>
            </div>

            <div className='py-5 border-b-1 border-gray-300'>
              <p className='flex gap-2 items-center text-gray-400'><IoIosCheckmarkCircleOutline /> <span>Free shipping on all orders over $50</span></p>
              <p className='flex gap-2 items-center text-gray-400'><IoIosCheckmarkCircleOutline /> <span>30 days easy returns</span></p>
              <p className='flex gap-2 items-center text-gray-400'><IoIosCheckmarkCircleOutline /> <span>All taxes and customs duties included</span></p>
            </div>

            <ul className='flex gap-2 py-5'>

              <li ><Link href={'/'}><FaFacebookF className='hover:text-blue-800' /></Link></li>
              <li ><Link href={'/'}><RiTwitterXLine className='hover:text-blue-800' /></Link></li>
              <li ><Link href={'/'}><CiAt className='hover:text-red-800' /></Link></li>
              <li ><Link href={'/'}><LuCirclePower className='hover:text-red-800' /></Link></li>
              <li ><Link href={'/'}><FaWhatsapp className='hover:text-blue-800' /></Link></li>
              <li ><Link href={'/'}> <PiButterflyDuotone className='hover:text-blue-800' /></Link></li>
              <li ><Link href={'/'}> <FaTelegramPlane className='hover:text-blue-800' /></Link></li>
              <li ><Link href={'/'}> <FaLinkedinIn className='hover:text-gray-800' /></Link></li>

            </ul>

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
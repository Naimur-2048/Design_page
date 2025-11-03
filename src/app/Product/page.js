'use client'
import React, { useRef, useState } from 'react'
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
import { GoDotFill } from "react-icons/go";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import Link from 'next/link';
import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


const page = () => {
  const [count, setCount] = useState(1);
  const [changePage, setChangePage] = useState('one');

  const selecttab = (pres) => {
    setChangePage(pres)
    console.log(changePage)

  }

  const props = { width: 400, height: 250, zoomWidth: 500, img: "images/by.jpg" };

  const parallax = useRef(null);

  // Little helpers ...
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  return (
    <>
      <div className='w-full bg-white '>
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

          <div className=' '>
            {/* Big photo */}
            <div>
              <Link href='/'>
                {/* <ReactImageZoom 
                width={600}
                  zoomPosition={"right"}
                  zoomLensStyle={"opacity: 0.7;background-color: green; width: 50px !important; height: 50px !important; border-radius: 50px;"}
                img={"images/by.jpg"}
                height={450}
                /> */}

                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Product Image',
                    isFluidWidth: true,
                    src: "images/by.jpg",
                  },
                  largeImage: {
                    src: "images/by.jpg",
                    width: 1200,
                    height: 1800,
                    enlargedImagePosition: 'over',
                  }
                }} />
              </Link>
              {/* <img src='images/by.jpg' className='w-full h-[750px]' /> */}
            </div>

            {/* Small photo */}
            <div className='grid grid-cols-4 gap-2 py-5'>
              <Link href='/'><img src='images/by.jpg' className='w-full h-[143px]' /></Link>
              <Link href='/'><img src='images/by1.jpg' className='w-full h-[143px]' /></Link>
              <Link href='/'><img src='images/by2.jpg' className='w-full h-[143px]' /></Link>
              <Link href='/'><img src='images/by3.jpg' className='w-full h-[143px]' /></Link>
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

             <span><img src='images/by.jpg' className='h-[58px] w-[58px]' /></span> 
              <span onClick={() =>selecttab ('black')}> <img src='images/bb.jpg' className='h-[58px] w-[58px]' /></span> 
              <img src='images/bw.jpg' className='h-[58px] w-[58px]' />
              <img src='images/br.jpg' className='h-[58px] w-[58px]' />
              <img src='images/bp.jpg' className='h-[58px] w-[58px]' />
            </div>

            <div className='w-[51%] grid grid-cols-2 gap-2 py-4'>
              <div className='bg-gray-200 flex justify-between items-center text-black w-full'>
                <button onClick={() => setCount(count>1 ? count-1 : 1)} className='py-3 px-4 cursor-pointer'><FaMinus />
                </button>
                <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className='py-3 px-4 cursor-pointer'><FaMinus /></button>
                <p><input value={count} className='w-12 h-full outline-none text-center' /></p>
                <button onClick={() => setCount(count + 1)} className='py-3 px-4 cursor-pointer'><FaPlus /></button>
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

        <div className='w-full '>
          <ul className='text-black flex justify-center items-center  gap-8 py-5'>
            <li>Description</li>
            <li>Product Information</li>
            <li>Size Guide</li>
            <li>Reviews</li>
            <li>Shiping & Return</li>
          </ul>

        </div>
        {/* 2nd page */}
        <div>
          <div className='w-full grid grid-cols-3 '>
            <div><img src='images/demo.png' className='h-[625px] w-full ' /></div>
            <div><img src='images/demo1.png' className='h-[625px] w-full ' /></div>
            <div><img src='images/demo2.png' className='h-[625px] w-full ' /></div>

          </div>

          <div className='grid grid-cols-3 gap-10 w-full px-25 py-20'>
            <div>
              <span className='text-black font-bold text-[20px] '>Specifications</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
            <div>
              <span className='text-black font-bold text-[20px] '>Materials</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
            <div>
              <span className='text-black font-bold text-[20px] ' >Maintance</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
            <div>
              <span className='text-black font-bold text-[20px] '>Vsibility</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
            <div>
              <span className='text-black font-bold text-[20px] '>Treatment</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
            <div>
              <span className='text-black font-bold text-[20px] '>Sustainable</span>
              <p className='text-gray-500 py-5'>
                Its compact design size makes it ideal for travel or the perfect
                body for everyday carry, the classic aluminum body gives it a
                tactile feel, proprietary low-velocity port design minimizes
                distortion.
              </p>
            </div>
          </div>

          <div className='w-full grid grid-cols-2 gap-20 pb-25 px-25 border-b-1 border-gray-300'>
          <div><img src='images/demo4.png' className='h-[773px] w-full '/></div>
          <div className='flex justify-center items-center'><img src='images/abc.png' className='h-[541px] w-[433px] '/></div>
          <div className='flex justify-center items-center'><img src='images/abc.png' className='h-[541px] w-[433px] '/></div>
          <div><img src='images/abc.png' className='h-[773px] w-full '/></div>

          </div>

        </div>

        {/* <div style={{ width: '100%', height: '100%', background: '#253237' }}>
          <Parallax ref={parallax} pages={3} className='w-full grid grid-cols-2 gap-20 pb-25 px-25 border-gray-300'>

            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
              }}
            />


            <ParallaxLayer offset={1.3} speed={-0.3}>
              <img src='images/demo4.png' className='h-[773px] w-[500px]' />
            </ParallaxLayer>
            <ParallaxLayer offset={1.75} speed={0.5} className='flex justify-center items-center'>
              <img src='images/abc.png' className='h-[541px] w-[433px] ' />
            </ParallaxLayer>
            <ParallaxLayer offset={1.3} speed={0} className='flex justify-center items-center'>
              <img src='images/abc.png' className='h-[541px] w-[433px] ' />
            </ParallaxLayer>
            <ParallaxLayer offset={1.75} speed={0.5}>
              <img src='images/abc.png' className='h-[773px]  w-[500px]' />
            </ParallaxLayer>
          </Parallax>
        </div> */}

        {/* You Might like you */}
        <div className='w-full px-25 py-25'>
          <p className=' text-center text-black font-semibold  text-[20px]'>You Might Also Like</p>
          {changePage == 'one' && (
            <div className='grid grid-cols-4 gap-5 py-20'>
              <div > <img src='images/cap1.png' className='h-[393px] w-full' /></div>
              <div > <img src='images/jacket1.png' className='h-[393px] w-full' /></div>
              <div > <img src='images/bag3.png' className='h-[393px] w-full' /></div>
              <div> <img src='images/bag1.png' className='h-[393px] w-full' /></div>
            </div>

          )}

          {changePage == 'two' && (
            <div className='grid grid-cols-4 gap-5 py-20'>
              <div > <img src='images/ts1.png' className='h-[393px] w-full' /></div>
              <div > <img src='images/ts2.png' className='h-[393px] w-full' /></div>
              <div > <img src='images/sm.png' className='h-[393px] w-full' /></div>
              <div> <img src='images/s.png' className='h-[393px] w-full' /></div>
            </div>

          )}
          <div className='w-full flex gap-2 justify-center items-center text-gray-400 '>
            <button onClick={() => selecttab('one')} className='cursor-pointer'><GoDotFill /></button>
            <button onClick={() => selecttab('two')} className='cursor-pointer'><GoDotFill /></button>
            <button onClick={() => selecttab('three')} className='cursor-pointer'><GoDotFill /></button>

          </div>

        </div>

        <div className='w-full bg-[#1B1D1F] grid grid-cols-2 py-25 px-25'>
          <div>
            <span className='text-[30px]'>Sign up for our newsletter</span>
            <div className='pr-50 relative py-10'>
              <input placeholder='Your Email' className='p-2 bg-[#17191A] mr-20 h-full w-full ' />
              <button className='bg-gray-700 px-3 py-1 cursor-pointer hover:bg-[#1B1D1F] absolute right-51 mt-10 top-0'>Subscribes</button>
            </div>
            <span className='flex gap-2'><RiVisaLine size={30} /> <FaCcMastercard size={30} /><FaCcPaypal size={30} /><FaCcStripe size={30} /></span>
          </div>

          <div className='grid grid-cols-3'>
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
              <p className='mb-10'>NEVAGATION</p>
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
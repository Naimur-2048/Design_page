"use client";
import Image from "next/image";
import { GiSnakeJar } from "react-icons/gi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { PiMessengerLogoLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const words = ["e-shop", "landing", "magazine", "website", "portfolio"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white h-full  w-full overflow-x-hidden">
        <div className="grid grid-cols-1  bg-[#262626] p-3 fixed top-0 w-full  ">
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

        <div className="grid grid-cols-2 mt-15 ">
          <div className="p-6 items-center">
            <span className="text-black font-bold text-lg">uncode</span>
          </div>
          <div className="text-black flex justify-end gap-8  pr-10">
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
        </div>

        <div className="p-20 flex flex-col justify-center items-center">
          <p className="text-[50px] text-black font-bold text-gray-700">
            You deserve a{" "}
          </p>
          <p className="text-[50px] text-black font-bold text-gray-700">
            {" "}
            stunning{" "}
            <span className=" text-gray-700 transition-opacity duration-500 ease-in-out">
              {words[index]}
            </span>
          </p>

          <p className="text-gray-500 text-lg ">
            Uncode is a popular creative WordPress theme designed for
            flexibility, and performance.
          </p>
          <p className="text-gray-500 text-lg py-2 pb-10">
            Start building with any of these included layouts or create with the
            Page Builder.
          </p>

          <button className=" p-3 px-8 bg-blue-600 cursor-pointer rounded-sm">
            Buy Now- $59
          </button>
        </div>

        <div className="w-full bg-[#1E2327] flex justify-center items-center gap-5 p-10">
          <button>Show all</button>
          <button>Classic</button>
          <button>Creative</button>
          <button>Portfolio</button>
          <button>Blog</button>
          <button>Shop</button>
          <button>Bussines</button>
          <button>Agency</button>
          <button>Freelance</button>
          <button>Photography</button>
        </div>

        {/* image card */}
        <div className="bg-[#1A1E21] min-h-screen w-full px-15">
          <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 pt-17">
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg1.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Agency
                </a>
              </div>
            </div>

            <div className="w-full">
              <Link href="/shop">
                <div className="h-55 w-full cursor-pointer bg-[url('/images/bg2.jpg')] bg-cover bg-center"></div>
              </Link>

              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  shop Agax Filter
                </a>
                <span className="bg-pink-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  HOT
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg3.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Lab
                </a>
                <span className="bg-blue-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg4.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Agency
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg5.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Innovetor
                </a>
                <span className="bg-green-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg6.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Portfolio Cards
                </a>
                <span className="bg-green-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg7.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Marketing
                </a>
                <span className="bg-blue-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg8.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Bussiness
                </a>
                <span className="bg-pink-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  WCAG
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg5.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Innovetor
                </a>
                <span className="bg-green-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg6.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Portfolio Cards
                </a>
                <span className="bg-green-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg7.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Marketing
                </a>
                <span className="bg-blue-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg8.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Bussiness
                </a>
                <span className="bg-pink-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  WCAG
                </span>
              </div>
            </div>
          </div>

          <div className="  w-full text-center py-26  ">
            <button className="p-4 border-2 border-white font-bold rounded-sm text-black bg-white px-10 hover:bg-[#1A1E21] hover:text-white">
              All Included Demos
            </button>
          </div>
        </div>
        {/* 3rd page */}
        <div className="w-full  p-20 mt-20 flex flex-col justify-center items-center">
          <p className="text-black text-[40px] font-extrabold">
            Main features of Uncode
          </p>
          <p className="text-black text-[40px] font-extrabold ">
            Multipurpose WordPress Theme
          </p>
          <p className="text-gray-400 text-lg mt-4">
            Launch your WordPress website, no coding knowledge is required.
          </p>
        </div>

        <div className=" pb-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-10">
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold ">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 text-center ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
          <div className="text-black">
            <p className="mb-3">
              <a href="" className="text-lg font-bold">
                Fronted Page Builder
              </a>
            </p>
            <a href="" className="text-gray-500 ">
              Uncode is packed with an inhanced page Builder edit your site
              easily. Use the classic backend editor or the powerful Fronted
              Editor.
            </a>
          </div>
        </div>
        <div className="flex flex-col animated-gradient  w-full bg-gradient-to-r from-[#530488] via-pink-300 to-[#370789] bg-[length:400%_400%] animate-gradient flex items-center justify-center text-white text-2xl font-bold">
          <div className="w-full flex flex-col justify-center items-center mt-30">
            <p className="text-sm text-gray-400 font-bold pb-9">
              WooCommerce Wordpress Theme
            </p>
            <p className="text-[50px]">Build WooCommerce websites</p>
            <p className="text-[50px] mb-11">like a skilled professional</p>
          </div>
          <div className=" w-full flex justify-center gap-2 flex-wrap">
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Single Product Builder
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Ajax Product Filters
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Variation Swatches
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Shop & Categories Layout
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Variation as Single Product
            </p>
          </div>
          <div className=" w-full flex justify-center gap-2 mt-3 flex-wrap">
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Additional Variation Gallery
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Ajax Side-Cart
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Catalog Mode
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Quick-View
            </p>
            <p className="text-lg bg-[#7851BC] p-1 px-1 rounded-sm">
              ✔ Yith Wishlist Compatible
            </p>
          </div>
          <div className="  w-full text-center py-26 pt-13  ">
            <button className="p-3 cursor-pointer border-2 text-lg border-white font-bold rounded-sm text-black bg-white px-10 hover:bg-[#7F3FA0] hover:text-white">
              Discover more
            </button>
          </div>
          <div className="h-81 w-full cursor-pointer bg-[url('/images/bgall.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="w-full">
          <p className="text-center text-black text-[35px] font-bold mt-36">
            Recommended by
          </p>
          <p className="text-center text-gray-400  text-lg mt-8">
            Appreciated by the most influential web design magazines and tech
            blogs.
          </p>
          <div className="grid grid-cols-6 gap-12 mt-18 mb-30 px-10">
            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon12.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon11.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon10.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon9.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon8.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon7.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon6.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon1.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon3.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon4.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon5.jpg')] bg-cover bg-center"></div>

            <div className="h-20 w-40 cursor-pointer bg-[url('/images/icon2.jpg')] bg-cover bg-center"></div>
          </div>
        </div>

        {/* 5th page */}
        <div className="bg-[#1E2327] pt-37 pb-36 ">
          <p className="text-[35px] text-center mb-6 ">Customers Showcase</p>
          <p className="text-gray-400 text-center mb-20">
            These are great examples of brand-new WordPress websites created
            with Uncode Theme.
          </p>
          <div className="grid grid-cols-5 gap-8">
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg1.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Agency
                </a>
              </div>
            </div>

            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg2.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  shop Agax Filter
                </a>
                <span className="bg-pink-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  HOT
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg3.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Lab
                </a>
                <span className="bg-blue-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg4.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Creative Agency
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="h-55 w-full cursor-pointer bg-[url('/images/bg5.jpg')] bg-cover bg-center"></div>
              <div className="mt-8 text-center">
                <a href="" className="text-sm">
                  Classic Innovetor
                </a>
                <span className="bg-green-500 px-2 py-1 ml-2 text-[8px] rounded-2xl">
                  NEW
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center  gap-5 mt-20 ">
            <button className="text-[30px]">•</button>
            <button className="text-[30px]">•</button>
            <button className="text-[30px]">•</button>
          </div>
        </div>

        {/* Frequently page */}

        <div className="pt-37 w-full pb-36">
          <p className="text-center text-black text-[45px] font-bold">
            Frequently Asked Questions
          </p>
          <p className="text-center text-gray-400 mb-18">
            Can’t see your question?{" "}
            <a
              href=""
              className="text-gray-600 font-bold text-decoration: underline hover:text-blue-500"
            >
              Chat with us!
            </a>
          </p>

          <div className="grid grid-cols-1 px-80">
            <div className="text-black py-8 border-t-1 border-gray-300 ">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  What is Uncode and what is included with my purchase?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
            <div className="text-black py-9 border-t-1 border-gray-300 ">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  Are there any recurring fees?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
            <div className="text-black py-9 border-t-1 border-gray-300 ">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  Are all the prebuilt websites included and customizable?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
            <div className="text-black py-9 border-t-1 border-gray-300">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  Do I need to know coding to build my website?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
            <div className="text-black py-9 border-t-1 border-gray-300">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  Do you offer and how can I get support?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
            <div className="text-black py-9 border-t-1  border-gray-300 border-b-1">
              <a href="" className="flex justify-between">
                <span className="text-lg font-bold  hover:text-blue-500">
                  What sets Uncode apart and why should I trust it?
                </span>
                <span className="text-[25px] font-light">+</span>
              </a>
            </div>
          </div>
        </div>

        {/* Top Seller page */}
        <div className="flex background-changer flex-col pt-48 pb-45 animated-gradient  w-full bg-gradient-to-r from-[#053DF5] via-[#530488] to-[#053DF5] bg-[length:400%_400%] animate-gradient flex items-center justify-center text-white text-2xl font-bold">
          <p className="text-[60px]">
            One of the top-seller themes <br />
            of all time with 125.000 sales
          </p>
          <p className="text-center font-light text-lg mt-8">
            No monthly or annual subscription. You only pay once!
          </p>
          <button className="text-sm p-3 px-8 bg-[#82B440] hover:bg-[#8dd430] mt-14 cursor-pointer rounded-sm">
            Buy Now- $59
          </button>
        </div>
        {/* last page */}
        <div className="bg-[#1E2327]">
          <div className="grid grid-cols-1  p-35 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-gray-400 p-5">Latest Demos</p>
              <p className="flex flex-col gap-3 p-5">
                <a href="" className=" hover:text-blue-500">
                  Creative Lab
                </a>
                <a href="" className=" hover:text-blue-500">
                  Classic Innovators
                </a>
                <a href="" className=" hover:text-blue-500">
                  Creative Prototype
                </a>
                <a href="" className=" hover:text-blue-500">
                  Portfolio Design Studio
                </a>
                <a href="" className=" hover:text-blue-500">
                  Portfolio Cards
                </a>
                <a href="" className=" hover:text-blue-500">
                  Portfolio Designer
                </a>
                <a href="" className=" hover:text-blue-500">
                  Shop Creative
                </a>
                <a href="" className=" hover:text-blue-500">
                  Portfolio Studio
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-400 p-5">Top Features</p>
              <p className="flex flex-col gap-3 p-5">
                <a href="" className=" hover:text-blue-500">
                  Page Builder
                </a>
                <a href="" className=" hover:text-blue-500">
                  WooCommerce
                </a>
                <a href="" className=" hover:text-blue-500">
                  Wireframes Plugin
                </a>
                <a href="" className=" hover:text-blue-500">
                  Posts Module
                </a>
                <a href="" className=" hover:text-blue-500">
                  Content Block
                </a>
                <a href="" className=" hover:text-blue-500">
                  Dynamic Contents
                </a>
                <a href="" className=" hover:text-blue-500">
                  Slides Scroll
                </a>
                <a href="" className=" hover:text-blue-500">
                  Color Changer
                </a>
                <a href="" className=" hover:text-blue-500">
                  Shape Dividers
                </a>
                <a href="" className=" hover:text-blue-500">
                  WPML Certified
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-400 p-5">Help center</p>
              <p className="flex items-center gap-2 p-5">
                <LuFiles />
                <a href="" className=" hover:text-blue-500 ">
                  docs and support
                </a>
              </p>
              <p className="text-gray-400 p-5">Tutorials</p>
              <p className="flex items-center gap-2 p-5">
                <IoPlayCircleOutline />
                <a href="" className=" hover:text-blue-500 ">
                  Video Tutorials
                </a>
              </p>
              <p className="text-gray-400 p-5">Chat Now</p>
              <p className="flex items-center gap-2 p-5">
                <PiMessengerLogoLight />
                <a href="" className=" hover:text-blue-500 ">
                  Parcel Questions
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-400 p-5">Community</p>
              <p className="flex items-center gap-2 p-5">
                <FaFacebookSquare />
                <a href="" className=" hover:text-blue-500">
                  Uncode Facebook Group
                </a>
              </p>
              <p className="text-gray-400 p-5">Wall of Fame</p>
              <p className="flex items-center gap-2 p-5">
                <FaHeart />
                <a href="" className=" hover:text-blue-500">
                  {" "}
                  Customer showcase
                </a>
              </p>

              <p className="text-gray-400 p-5">Follow</p>
              <p className="flex items-center gap-4 p-5 ">
                <a href="" className="hover:text-blue-500">
                  <FaFacebookSquare />
                </a>
                <a href="" className="hover:text-blue-500">
                  <IoLogoYoutube />
                </a>
                <a href="" className="hover:text-blue-500">
                  {" "}
                  <FaXTwitter />
                </a>
                <a href="" className="hover:text-blue-500">
                  <AiFillFire />{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1B1F23] p-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 Uncode. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

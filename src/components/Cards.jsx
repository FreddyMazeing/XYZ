import React from "react";
import a1 from "../assets/a1.jpg";
import a4 from "../assets/a4.jpg";
import { SiStylelint } from "react-icons/si";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaAmazon } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className=" max-w-full pb-20 min-h-screen flex flex-col bg-slate-400  items-center justify-center ">
        {/* Welcome to Fashion Haven */}
        <div className="flex flex-col text-center bg-gradient-to-tr from-gray-800  to-slate-400 mx-6  p-4 rounded-ss-full  rounded-ee-full max-w-7xl my-10">
          <h1 className="text-5xl text-slate-200 font-light">
            Welcome To{" "}
            <span className="bg-slate-950 bg-clip-text text-transparent">
              Fashion Haven{" "}
            </span>
          </h1>
          <p className="font-bold text-6xl">this is your</p>
          <p className="font-bold text-gray-800  text-3xl">
            <span className="text-slate-300">one </span>
            <span className="text-[#a30fff]">stop </span>
            <span className="text-[#FB7B19]">store </span>
          </p>
        </div>
        {/* bg-gradient-to-bl from-slate-950 via-slate-600 to-slate-800 bg-slate-400  */}
        {/* Grid and Cards */}
        <div className="grid sm:grid-cols-2 px-9 gap-10 sm:px-0 sm:max-w-[2000px]">
          {/* Card_1 */}
          <div className="grid md:grid-cols-2 flex-col sm:flex-row hover:shadow-md shadow-black  bg-gradient-to-bl p-2 from-gray-800  to-slate-400 rounded-2xl  hover:rounded-bl-full duration-700  ease-in-out ">
            <div className="rounded-full ">
              <img
                src={a1}
                alt="img1"
                className="hover:scale-110  rounded-bl-full hover:rounded-2xl duration-700 hover:brightness-125   ease-in-out rounded-lg shadow-md shadow-black w-full"
              />
            </div>
            <div className="trans translate-x-9 my-3">
              <div className="flex ">
                <SiStylelint />
                <p className="text-xs uppercase translate-x-2 text-white">
                  Modern Style
                </p>
              </div>
              <h1 className="text-4xl font-light text-[#FB7B19] tracking-widest ">
                Fashion
              </h1>
              <p className="md:text-xl text-sm hover:text-lg tracking-widest pr-9 font-semibold text-slate-400 hover:text-slate-200 duration-1000 ease-in-out">
                Our premium wool suit delivers sophisticated, polished style.
                The tailored jacket and straight-leg trousers create a sleek,
                versatile look that transitions from work to evening. Command
                confidence in this modern, Italian-crafted ensemble.
              </p>
              <div className="grid grid-cols-2 pr-9 gap-4 mt-10 mr-9">
                {/* Suit Button */}
                <div className="flex shadow-md items-center justify-center  shadow-black rounded-lg text-start p-1 ">
                  <h1 className="text-sm font-extrabold">Suit</h1>
                  <div className=" translate-x-2 p-1 rounded-xl bg-[#FB7B19]">
                    {" "}
                    <h1 className="text-sm text-[#833d08] font-bold">
                      {" "}
                      R250.00
                    </h1>
                  </div>
                </div>
                {/* Buy Now Button */}
                <div className="flex items-center justify-center  shadow-md  shadow-black rounded-lg text-start p-1 ">
                  <h1 className="text-sm font-extrabold">Buy</h1>
                  <div className="translate-x-2 bg-[#FB7B19] px-4 rounded-full">
                    <MdOutlineShoppingCartCheckout size={25} color="white" />
                  </div>
                </div>
              </div>
              {/* Visit */}
              <div
                className="bg-gradient-to-r  from-white to-[#FB7B19] rounded-full grid grid-cols-4 duration-700
               hover:shadow-xl hover:shadow-black  ease-in-out items-center 
               py-2 px-9 mr-20 mt-10"
              >
                <h1 className="text-sm tracking-widest text-[#FB7B19]">
                  Visit
                </h1>
                <a href="https://www.amazon.com/s?k=woman+suits+2+piece+set&crid=2BQLAZ4095S1U&sprefix=woman+sui%2Caps%2C592&ref=nb_sb_ss_pltr-sample-20_1_9">
                  {" "}
                  <FaAmazon />
                </a>
                <a href="https://www.facebook.com/commerce/listing/955252559614559?media_id=0&ref=share_attachment">
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/p/C4qyie3NVSg/">
                  {" "}
                  <FaInstagram />
                </a>
                {/*  hover:outline-offset-2 hover:outline-duoble hover:outline-green-500 hover:outline */}
              </div>
            </div>
          </div>
          {/* Card_2 */}
          <div className="grid md:grid-cols-2 flex-col sm:flex-row hover:shadow-md shadow-black  bg-gradient-to-br p-2 from-gray-800  to-slate-400 rounded-2xl  hover:rounded-br-full duration-700  ease-in-out ">
            <div className="trans translate-x-9 my-3">
              <div className="flex ">
                <SiStylelint />
                <p className="text-xs uppercase translate-x-2 text-white">
                  Happy Heart
                </p>
              </div>
              <h1 className="text-4xl font-light text-[#a719ff] tracking-widest ">
                Heart
              </h1>
              <p className="md:text-xl text-sm hover:text-lg tracking-widest pr-9 font-semibold text-slate-400 hover:text-slate-200 duration-1000 ease-in-out">
                Our premium wool suit delivers sophisticated, polished style.
                The tailored jacket and straight-leg trousers create a sleek,
                versatile look that transitions from work to evening. Command
                confidence in this modern, Italian-crafted ensemble.
              </p>
              <div className="grid grid-cols-2 pr-9 gap-4 mt-10 mr-9">
                {/* Suit Button */}
                <div className="flex shadow-md items-center justify-center  shadow-black rounded-lg text-start p-1 ">
                  <h1 className="text-sm font-extrabold">Heart</h1>
                  <div className=" translate-x-2 p-1 rounded-xl bg-[#7B01C6]">
                    {" "}
                    <h1 className="text-sm text-[#2b0c3d] font-bold">
                      {" "}
                      R300.00
                    </h1>
                  </div>
                </div>
                {/* Buy Now Button */}
                <div className="flex items-center justify-center  shadow-md  shadow-black rounded-lg text-start p-1 ">
                  <h1 className="text-sm font-extrabold">Buy</h1>
                  <div className="translate-x-2 bg-[#7B01C6] px-4 rounded-full">
                    <MdOutlineShoppingCartCheckout size={25} color="white" />
                  </div>
                </div>
              </div>
              {/* Visit */}
              <div
                className="bg-gradient-to-r  from-white to-[#7B01C6] rounded-full grid grid-cols-4 duration-700
               hover:shadow-xl hover:shadow-black  ease-in-out items-center 
               py-2 px-9 mr-20 mt-10"
              >
                <h1 className="text-sm tracking-widest text-[#7B01C6]">
                  Visit
                </h1>
                <a href="https://www.amazon.com/s?k=woman+suits+2+piece+set&crid=2BQLAZ4095S1U&sprefix=woman+sui%2Caps%2C592&ref=nb_sb_ss_pltr-sample-20_1_9">
                  {" "}
                  <FaAmazon />
                </a>
                <a href="https://www.facebook.com/commerce/listing/955252559614559?media_id=0&ref=share_attachment">
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/p/C4qyie3NVSg/">
                  {" "}
                  <FaInstagram />
                </a>
                {/*  hover:outline-offset-2 hover:outline-duoble hover:outline-green-500 hover:outline */}
              </div>
            </div>
            <div className="rounded-full ">
              <img
                src={a4}
                alt="img1"
                className="hover:scale-110  rounded-tl-full md:rounded-br-full hover:rounded-2xl duration-700  hover:brightness-125  ease-in-out rounded-lg shadow-md shadow-black w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

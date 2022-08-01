import React, { useState } from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Card = ({ Image, caption }: { Image: string; caption: string }) => {
  return (
    <section className="group mt-14 flex justify-between flex-col md:flex-row">
      <div
        style={{
          backgroundImage: `url(${Image})`,
        }}
        className=" w-full md:w-[66.6666%] h-[405px] bg-cover bg-no-repeat bg-center mr-3 cursor-pointer"
      ></div>
      <div className="w-full md:w-[36%] md:px-7 ">
        <h3 className="text-text-color1 font-medium text-[14px] mt-[20px] md:mt-[1px]">
          {caption}
        </h3>
        <h1 className="text-black text-[40px] font-bold mt-[6px] group-hover:opacity-50 transition-all ease-in">
          Build a website in minutes with Adobe Templates
        </h1>

        <ul className="md:opacity-0 opacity-100 w-full h-12 mt-6 flex ml-[-10px] group-hover:opacity-100 transition-all ease-in ">
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer hover:bg-text-color3 transition-all ease-in ">
            <a>
              <AiOutlineTwitter className="w-5 h-5 " />
            </a>
          </li>
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer hover:bg-text-color3 transition-all ease-in">
            <a>
              <GrFacebookOption className="w-5 h-5 " />
            </a>
          </li>
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer hover:bg-text-color3 transition-all ease-in">
            <a>
              <AiOutlineInstagram className="w-5 h-5 " />
            </a>
          </li>
        </ul>

        <div className="mt-5 ml-1">
          <span className="text-text-color1 text-[12px] group-hover:text-black transition-all ease-in ">
            11/13/2019 | 12 min read
          </span>
        </div>
      </div>
    </section>
  );
};

export default Card;

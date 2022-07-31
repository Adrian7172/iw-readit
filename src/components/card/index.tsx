import React, { useState } from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Card = () => {
  const [hover, setHover] = useState(false);
  return (
    <section className="group mt-10 flex justify-between">
      <div
        style={{
          backgroundImage:
            "url(https://preview.colorlib.com/theme/readit/images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp)",
        }}
        className="w-[66.6666%] h-[405px] bg-cover bg-no-repeat bg-center mr-3 cursor-pointer"
      ></div>
      <div className="w-[36%] px-7 ">
        <h3 className="text-text-color1 font-medium text-[14px] mt-[1px]">
          ILLUSTRATION
        </h3>
        <h1 className="text-black text-[40px] font-bold mt-[6px] group-hover:opacity-50 transition-all ease-in">
          Build a website in minutes with Adobe Templates
        </h1>

        <ul className="opacity-0 w-full h-12 mt-6 flex ml-[-10px] group-hover:opacity-100 transition-all ease-in ">
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer">
            <a>
              <AiOutlineTwitter className="w-5 h-5 " />
            </a>
          </li>
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer">
            <a>
              <GrFacebookOption className="w-5 h-5 " />
            </a>
          </li>
          <li className="bg-text-color2 h-full w-12 rounded-md flex items-center justify-center ml-3 cursor-pointer">
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

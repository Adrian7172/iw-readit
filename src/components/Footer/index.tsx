import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineRight,
  AiFillHeart,
} from "react-icons/ai";
import { GrFacebookOption, GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full pt-[80px] bg-bg-color1 mt-[80px]">
      <div className="max-w-[1260px] m-auto px-2 sm:px-6 lg:px-6">
        {" "}
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <div className=" sm:mt-5">
            {" "}
            <div className="text-white text-[34px] font-black ">
              Read<span className="text-text-color3">it</span>.
            </div>
            <p className="text-[16px] text-text-color4 mt-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="w-full h-[50px] mt-[40px] flex items-center">
              <li className="h-full w-[50px] rounded-full bg-text-color5 flex items-center justify-center ml-[10px]">
                <AiOutlineTwitter className=" w-7 h-7 text-white" />
              </li>
              <li className="h-full w-[50px] rounded-full bg-text-color5 flex items-center justify-center ml-[10px]">
                <GrFacebookOption className=" w-7 h-7 text-white" />
              </li>
              <li className="h-full w-[50px] rounded-full bg-text-color5 flex items-center justify-center ml-[10px]">
                <AiOutlineInstagram className=" w-7 h-7 text-white" />
              </li>
            </ul>
          </div>
          <div className=" sm:mt-10">
            <div className="text-[20px] text-white font-normal">
              latest news
            </div>
            <div className=" flex mt-[20px]">
              <div
                style={{
                  backgroundImage:
                    "url(https://preview.colorlib.com/theme/readit/images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp)",
                }}
                className="w-[80px!important] h-[80px!important]  rounded-md bg-center bg-cover"
              />
              <div className="block max-w-[60%] box-border ml-5">
                <p className="text-[16px] text-text-color4 hover:text-text-color3 cursor-pointer transition-all ease-in ">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-text-color6 text-[11px] mt-2">
                  Oct. 16, 2019 Admin 19
                </p>
              </div>
            </div>
            <div className=" flex mt-[20px]">
              <div
                style={{
                  backgroundImage:
                    "url(https://preview.colorlib.com/theme/readit/images/ximage_2.jpg.pagespeed.ic.pkTf90Znlu.webp)",
                }}
                className="w-[80px!important] h-[80px!important]  rounded-md bg-center bg-cover"
              />
              <div className="block max-w-[60%] box-border ml-5">
                <p className="text-[16px] text-text-color4 hover:text-text-color3 cursor-pointer transition-all ease-in">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-text-color6 text-[11px] mt-2">
                  Oct. 16, 2019 Admin 19
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-10 sm:mt-10">
            <div className="text-[20px] text-white font-normal">
              Information
            </div>
            <ul className=" mt-7">
              <li className="flex text-white hover:text-text-color3 items-center mt-3 cursor-pointer transition-all ease-in">
                <AiOutlineRight className="w-4 h-4" />{" "}
                <p className="ml-2 text-[16px]">Home</p>
              </li>
              <li className="flex text-white hover:text-text-color3 items-center mt-3 cursor-pointer transition-all ease-in">
                <AiOutlineRight className="w-4 h-4" />{" "}
                <p className="ml-2 text-[16px]">About</p>
              </li>
              <li className="flex text-white hover:text-text-color3 items-center mt-3 cursor-pointer transition-all ease-in">
                <AiOutlineRight className="w-4 h-4" />{" "}
                <p className="ml-2 text-[16px]">Articles</p>
              </li>
              <li className="flex text-white hover:text-text-color3 items-center mt-3 cursor-pointer transition-all ease-in">
                <AiOutlineRight className="w-4 h-4" />{" "}
                <p className="ml-2 text-[16px]">Contact</p>
              </li>
            </ul>
          </div>
          <div className="sm:mt-10">
            <div className="text-[20px] text-white font-normal">
              Have a questions?
            </div>
            <div className="mt-7 flex">
              <MdLocationOn className="w-5 h-5 text-white" />
              <p className="text-[16px] text-text-color4 w-[80%] ml-8">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className="mt-7 flex">
              <ImPhone className="w-5 h-5 text-white" />
              <p className="text-[16px] text-text-color4 hover:text-text-color3 cursor-pointer transition-all ease-in w-[80%] ml-8">
                +2 392 3929 210
              </p>
            </div>
            <div className="mt-7 flex">
              <GrMail className="w-5 h-5 text-white" />
              <p className="text-[16px] text-text-color4 hover:text-text-color3 cursor-pointer transition-all ease-in w-[80%] ml-8">
                info@yourdomain.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:flex md:items-center sm:items-start justify-center py-20 text-[16px] text-text-color4">
          <p>
            Copyright ©2022 All rights reserved | This template is made with
            &nbsp;
          </p>
          <span className="flex items-center">
            <AiFillHeart className="" />
            &nbsp; by Colorlib
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
